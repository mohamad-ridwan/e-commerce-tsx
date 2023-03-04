import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "../../components/Button/Button"
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { successCheckout } from '../../redux/reducers/cartReducer'

export const SuccessCheckout = () => {
    const username = useAppSelector((state) => state.users.username)
    const navigate = useNavigate()
    const params = useParams()

    const dispatch = useAppDispatch()

    const backToHome = (): void => {
        navigate('/')
        dispatch(successCheckout())
    }

    return (
        <div className="flex max-w-sm mx-auto">
            <div className='flex flex-col w-full justify-center my-auto pb-12 min-h-[100vh] h-auto bg-slate-800 px-8'>
                {params.username === username.toLowerCase().split(' ').join('') && (
                    <>
                        <h1 className="text-white text-center mb-16">Success Checkout</h1>

                        <Button
                            className='bg-slate-300 text-slate-900 rounded-md'
                            click={backToHome}
                        >
                            <span>Back To Home</span>
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}