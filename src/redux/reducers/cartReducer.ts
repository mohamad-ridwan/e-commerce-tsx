import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type IStateCartReducer = {
    userId: number
    idProduct: number
    productName: string
    url: string
    size: string
    price: number
    totalPrice: number
    subTotal: number
    category: string
    description: string
}

type cart = {
    cart: IStateCartReducer[]
}

const initialState: cart = {
    cart: []
}

export const cartReducer = createSlice({
    name: 'cart-reducer',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IStateCartReducer>) => {
            const product: IStateCartReducer[] = [current(state.cart)][0]
            const findIndex: number = product.findIndex(item =>
                item.userId === action.payload.userId &&
                item.idProduct === action.payload.idProduct &&
                item.size === action.payload.size
            )
            if (findIndex !== -1) {
                const totalPrice = product[findIndex].totalPrice + action.payload.totalPrice
                const subTotal = product[findIndex].subTotal + action.payload.subTotal

                state.cart[findIndex].totalPrice = totalPrice
                state.cart[findIndex].subTotal = subTotal
            } else {
                state.cart.unshift(action.payload)
            }
        },
        handlePlusCartProduct: (state, action: PayloadAction<IStateCartReducer>) => {
            const product: IStateCartReducer[] = [current(state.cart)][0]
            const findIndex: number = product.findIndex(item =>
                item.userId === action.payload.userId &&
                item.idProduct === action.payload.idProduct &&
                item.size === action.payload.size
            )
            state.cart[findIndex].subTotal += 1
            state.cart[findIndex].totalPrice = state.cart[findIndex].totalPrice + action.payload.price
        },
        handleMinusCartProduct: (state, action: PayloadAction<IStateCartReducer>) => {
            const product: IStateCartReducer[] = [current(state.cart)][0]
            const findIndex: number = product.findIndex(item =>
                item.userId === action.payload.userId &&
                item.idProduct === action.payload.idProduct &&
                item.size === action.payload.size
            )
            state.cart[findIndex].subTotal -= 1
            state.cart[findIndex].totalPrice = state.cart[findIndex].totalPrice - action.payload.price
        },
        deleteProductCart: (state, action: PayloadAction<IStateCartReducer>)=>{
            const product: IStateCartReducer[] = [current(state.cart)][0]
            const getIndexProduct: number = product.findIndex(item =>
                item.userId === action.payload.userId &&
                item.idProduct === action.payload.idProduct &&
                item.size === action.payload.size
            )
            const deleteProduct: IStateCartReducer[] = product.filter((item, index)=> index !== getIndexProduct)
            state.cart = deleteProduct
        },
        successCheckout: (state)=>{
            state.cart = []
        }
    }
})

export const { addToCart, handlePlusCartProduct, handleMinusCartProduct, deleteProductCart, successCheckout } = cartReducer.actions

export default cartReducer.reducer