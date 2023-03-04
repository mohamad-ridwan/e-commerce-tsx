import {createSlice, current} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TStateFavoriteReducer = {
    userId: number
    idProduct: number
    productName: string
    url: string
    size: {size: string}[]
    price: number
}

type TStateDefault = {
    product: TStateFavoriteReducer[]
}

const initialState: TStateDefault = {
    product: []
}

export const favoriteReducer = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<TStateFavoriteReducer>)=>{
            const product: TStateFavoriteReducer[] = current(state.product)
            const findIndex: number = product.findIndex(item =>
                item.userId === action.payload.userId &&
                item.idProduct === action.payload.idProduct
            )

            if(findIndex !== -1){
                const deleteProduct: TStateFavoriteReducer[] = product.filter((item, index)=> index !== findIndex)
                state.product = deleteProduct
            }else{
                state.product.unshift(action.payload)
            }
        }
    }
})

export const {addToFavorite} = favoriteReducer.actions

export default favoriteReducer.reducer