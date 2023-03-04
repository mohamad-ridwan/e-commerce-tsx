import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TUsersData } from '../../@types/UsersData.types'

const initialState: TUsersData = {
    userId: 0,
    image: '',
    username: '',
    phone: 0,
    email: '',
    password: '',
    address: '',
    isVerification: false
}

export const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<TUsersData>) => {
            return {
                ...state,
                userId: action.payload.userId,
                image: action.payload.image,
                username: action.payload.username,
                phone: action.payload.phone,
                email: action.payload.email,
                password: action.payload.password,
                address: action.payload.address,
                isVerification: action.payload.isVerification
            }
        }
    }
})

export const { addUser } = usersReducer.actions

export default usersReducer.reducer