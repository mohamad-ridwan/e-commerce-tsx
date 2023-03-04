import {useEffect, useState} from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom'
import { Button } from "../../components/Button/Button"
import { CartCard } from '../../components/CartCard/CartCard'
import { SubTotalCart } from '../../components/SubTotalCart/SubTotalCart'
import shirt1 from '../../images/shirt-1.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { deleteProductCart, handleMinusCartProduct, handlePlusCartProduct, IStateCartReducer } from '../../redux/reducers/cartReducer'

export const Cart = () => {
    const [subTotal, setSubTotal] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const cart = useAppSelector((state) => state.cart.cart)
    const users = useAppSelector((state) => state.users)
    const cartProduct = cart.filter(item => item.userId === users.userId)

    const dispatch = useAppDispatch()

    const navigate: NavigateFunction = useNavigate()
    
    const shipping: number = 5

    const updateTotal = (): void=>{
        let sub_total: number = 0
        const price: Array<string> = []

        let count: number = 0
        for(let i: number = 0; i < cartProduct.length; i++){
            count += 1
            const totalPricePerProduct = cartProduct[i].totalPrice
            price.push(totalPricePerProduct.toString())
        }

        if(count === cartProduct.length){
            sub_total = eval(price.join('+'))
            setSubTotal(sub_total)
            setTotal(sub_total + shipping)
        }
    }

    useEffect(()=>{
        updateTotal()
    }, [cart])

    const backToHome = (): void => {
        navigate('/')
    }

    const clickPlus = (product: IStateCartReducer):void=>{
        dispatch(handlePlusCartProduct(product))
    }
    const clickMinus = (product: IStateCartReducer):void=>{
        if(product.subTotal > 1){
            dispatch(handleMinusCartProduct(product))
        }
    }

    const clickDelete = (product: IStateCartReducer):void=>{
        dispatch(deleteProductCart(product))
    }

    const toCheckout = ():void=>{
        navigate(`/checkout/${users.username.toLowerCase().split(' ').join('')}`)
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

                <h1 className='text-sm font-semibold justify-center flex w-full mb-8'>Cart</h1>

                {cartProduct.length > 0 ? (
                    <>
                        {cartProduct.map((product, index) => (
                            <CartCard
                                key={index}
                                productName={product.productName}
                                urlImg={product.url}
                                size={product.size}
                                totalPrice={product.totalPrice}
                                subTotal={product.subTotal}
                                pathToDetail={`/detail-product/${product.idProduct}`}
                                clickPlus={()=>clickPlus(product)}
                                clickMinus={()=>clickMinus(product)}
                                clickDelete={()=>clickDelete(product)}
                            />
                        ))}

                        <SubTotalCart
                        subTotal={subTotal}
                        shipping={shipping}
                        total={total}
                        toCheckout={toCheckout}
                        />
                    </>
                ) : (
                    <div>
                        <h1>Cart is empty</h1>
                    </div>
                )}
            </div>
        </div>
    )
}