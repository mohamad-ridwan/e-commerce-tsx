import {useNavigate, NavigateFunction} from 'react-router-dom'
import { Button } from "../../components/Button/Button"
import { CartCard } from '../../components/CartCard/CartCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { addToFavorite, TStateFavoriteReducer } from '../../redux/reducers/favoriteReducer'

export const Favorite = () => {
    const productFavorite = useAppSelector((state)=>state.favorite.product)
    const users = useAppSelector((state) => state.users)
    const myFavorite = productFavorite.filter(product=> product.userId === users.userId)
    const dispatch = useAppDispatch()

    const navigate: NavigateFunction = useNavigate()

    const backToHome = (): void => {
        navigate('/')
    }

    const deleteProductFavorite = (product: TStateFavoriteReducer): void=>{
        dispatch(addToFavorite(product))
      }

    return (
        <div className='flex max-w-sm mx-auto py-8 px-4'>
            <div className='flex-col w-full justify-center pb-12 relative'>
                <Button
                    className='absolute left-4 bg-slate-900 flex justify-center items-center h-7 w-7 rounded-full z-10 hover:bg-slate-800'
                    click={backToHome}
                >
                    <i className="fa-solid fa-arrow-left text-white text-sm"></i>
                </Button>

                <h1 className='text-sm font-semibold justify-center flex w-full mb-8'>Favorite</h1>

                {myFavorite.length > 0 ? myFavorite.map((product, index)=>{
                    return (
                        <CartCard
                            key={index}
                            productName={product.productName}
                            urlImg={product.url}
                            totalPrice={product.price}
                            display='hidden'
                            pathToDetail={`/detail-product/${product.idProduct}`}
                            clickDelete={()=>deleteProductFavorite(product)}
                        />
                    )
                }):(
                    <div>
                        <h1>Your favorite is empty</h1>
                    </div>
                )}
            </div>
        </div>
    )
}