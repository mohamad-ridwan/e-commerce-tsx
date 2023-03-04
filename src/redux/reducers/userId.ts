import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface IUserIdState{
    userId: number
}

const initialState: IUserIdState = {userId: 0}

export const userIdReducer = createSlice({
    name: 'user-id',
    initialState,
    reducers: {
        addUserId: (state, action: PayloadAction<number>)=>{
            return{
                ...state,
                userId: action.payload
            }
        }
    }
})

export const {addUserId} = userIdReducer.actions

export default userIdReducer.reducer