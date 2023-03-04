import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserData } from '../Users/UsersData'
import { Login } from '../../pages/Login/Login'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { addUser } from '../../redux/reducers/users'

export const IsLoggedIn = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const userId = useAppSelector((state)=>state.userId.userId)
    const dispatch = useAppDispatch()
    
    const navigate = useNavigate()

    const userIsLoggedIn = (): void => {
        const usersCheck = UserData.filter(user =>user.userId === userId)
        const userVerification = usersCheck.length === 1 ? usersCheck[0].isVerification : false

        if(userVerification){
            dispatch(addUser(usersCheck[0]))
            setIsLogin(true)
        }else{
            navigate('/login')
        }
    }

    useEffect(()=>{
        userIsLoggedIn()
    }, [userId])

    return isLogin ? <Outlet /> : <Login />
}