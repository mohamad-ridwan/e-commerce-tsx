import {createSlice, current} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TProductData } from '../../@types/Product.types'
import shirt1 from '../../images/shirt-1.jpg'
import sweater2 from '../../images/sweater2.jpg'
import sweater3 from '../../images/sweater3.jpg'
import womenswt1 from '../../images/womenswt1.jpg'
import womenswt2 from '../../images/womenswt2.jpg'
import womenswt3 from '../../images/womenswt3.jpg'
import kids1 from '../../images/kids1.jpg'
import kids2 from '../../images/kids2.jpg'
import kids3 from '../../images/kids3.jpg'
import couple1 from '../../images/couple1.jpg'
import couple2 from '../../images/couple2.jpg'
import couple3 from '../../images/couple3.jpg'

const initialState: TProductData[] = [
    {
        userId: 0,
        idProduct: 3134,
        url: shirt1,
        productName: 'Sweater',
        category: 'man',
        price: 49,
        detailImg: [
          {
            url: shirt1
          },
          {
            url: sweater2
          },
          {
            url: sweater3
          }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus fugiat nihil magni quidem similique qui velit fugit enim repellendus. Laboriosam nam nulla libero! Assumenda similique repellendus dolor nulla dolorem.',
        size: [{size: 'S'},{size: 'M'},{size: 'L'},{size: 'XL'},{size: 'XXL'},]
      },
      {
        userId: 0,
        idProduct: 9813,
        url: womenswt1,
        productName: 'Women Sweater',
        category: 'women',
        price: 43,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus fugiat nihil magni quidem similique qui velit fugit enim repellendus. Laboriosam nam nulla libero! Assumenda similique repellendus dolor nulla dolorem.',
        detailImg: [
          {
            url: womenswt1
          },
          {
            url: womenswt2
          },
          {
            url: womenswt3
          }
        ],
        size: [{size: 'S'},{size: 'M'},{size: 'L'}]
      },
      {
        userId: 0,
        idProduct: 8124,
        url: kids1,
        productName: 'Kids',
        category: 'kids',
        price: 32,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus fugiat nihil magni quidem similique qui velit fugit enim repellendus. Laboriosam nam nulla libero! Assumenda similique repellendus dolor nulla dolorem.',
        detailImg: [
          {
            url: kids1
          },
          {
            url: kids2
          },
          {
            url: kids3
          }
        ],
        size: [{size: 'S'},{size: 'M'},{size: 'L'},{size: 'XL'}]
      },
      {
        userId: 0,
        idProduct: 7613,
        url: couple1,
        productName: 'Wool Blend Midi Skirt',
        category: 'couple',
        price: 22,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus fugiat nihil magni quidem similique qui velit fugit enim repellendus. Laboriosam nam nulla libero! Assumenda similique repellendus dolor nulla dolorem.',
        detailImg: [
          {
            url: couple1
          },
          {
            url: couple2
          },
          {
            url: couple3
          }
        ],
        size: [{size: 'L'},{size: 'XL'},{size: 'XXL'},]
      }
]

export const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers:{
      addUserIdProduct: (state, action: PayloadAction<number>)=>{
        const product = current(state)
        for(let i: number = 0; i < product.length; i++){
          state[i].userId = action.payload
        }
      }
    }
})

export const {addUserIdProduct} = productReducer.actions

export default productReducer.reducer