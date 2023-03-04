import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { addUserId } from '../../redux/reducers/userId'
import { addUser } from '../../redux/reducers/users'

export const Account = () => {
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logOut = (): void => {
        dispatch(addUser({
            userId: 0,
            image: '',
            username: '',
            phone: 0,
            email: '',
            password: '',
            address: '',
            isVerification: false
        }))
        dispatch(addUserId(0))
    }

    const backToHome = (): void => {
        navigate('/')
    }
    return (
        <div className="flex max-w-sm mx-auto">
            <div className='flex flex-col w-full justify-center my-auto pb-12 min-h-[100vh] h-auto bg-slate-100 relative'>
                {users.userId !== 0 && users.isVerification && (
                    <>
                        <Button
                            className='absolute left-8 top-8 bg-slate-900 flex justify-center items-center h-7 w-7 rounded-full z-10 hover:bg-slate-800'
                            click={backToHome}
                        >
                            <i className="fa-solid fa-arrow-left text-white text-sm"></i>
                        </Button>
                        <div className="flex flex-col justify-center items-center pb-4 px-4">
                            <img src={users.image} alt="" className="h-24 w-24 rounded-full object-cover" />
                            <span className='mt-4 mb-1 text-sm text-center'>
                                <strong>{users.username}</strong>
                            </span>
                            <span className='text-sm text-center text-slate-500'>{users.email}</span>
                        </div>
                        <div className='flex flex-col mt-8 px-8'>
                            <span className='flex flex-col text-sm mb-4'>
                                <strong className='my-1'>Phone</strong>
                                <p className='text-[0.85rem] text-slate-500'>0{users.phone}</p>
                            </span>
                            <span className='flex flex-col text-sm'>
                                <strong className='my-1'>Address</strong>
                                <p className='text-[0.85rem] text-slate-500'>{users.address}</p>
                            </span>
                        </div>

                        <Button
                            className='rounded-md p-2 bg-red-800 mx-8 mt-8 text-white hover:bg-red-900 transition duration-300 ease-in-out'
                            click={logOut}
                        >
                            <span>Log Out</span>
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}