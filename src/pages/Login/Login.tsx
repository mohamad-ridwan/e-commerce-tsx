import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Input } from "../../components/Input/Input"
import { Label } from "../../components/Label/Label"
import { UserData } from '../../components/Users/UsersData'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { addUserId } from '../../redux/reducers/userId'
import { addUser } from '../../redux/reducers/users'

interface ILoginValue {
    username: string
    phone: number
    email: string
    password: string
}

interface IValidateLogin {
    username: boolean
    phone: boolean
    email: boolean
    password: boolean
}

export const Login = () => {
    const [loginInput, setLoginInput] = useState<ILoginValue>({
        username: '',
        phone: 0,
        email: '',
        password: ''
    })

    const dispatch = useAppDispatch()
    const userId = useAppSelector((state)=>state.userId.userId)
    const pathname = window.location.pathname

    const navigate = useNavigate()

    const userIsLogin = (): void => {
        const usersCheck = UserData.filter(user => user.userId === userId)
        const userVerification = usersCheck.length === 1 ? usersCheck[0].isVerification : false

        if(userVerification && pathname.includes('login')){
            navigate('/')
        }
    }

    useEffect(() => {
        userIsLogin()
    }, [pathname])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLoginInput({
            ...loginInput,
            [event.target.name]: event.target.name === 'phone' ? Number(event.target.value) : event.target.value
        })
    }

    const formValidate = () => {
        let err: IValidateLogin = {
            username: false,
            phone: false,
            email: false,
            password: false
        }

        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!loginInput.username.trim()) {
            err.username = true
        }
        if (loginInput.phone.toString().length < 9) {
            err.phone = true
        }
        if (!loginInput.email.trim() || !regexEmail.test(loginInput.email)) {
            err.email = true
        }
        if (!loginInput.password.trim()) {
            err.password = true
        }

        const getErrValue = Object.entries(err).map((item, key) => item[1])
        const formIsValid = getErrValue.filter(item => item === true)
        return new Promise((resolve, reject) => {
            if (formIsValid.length === 0) {
                resolve({ message: 'success' })
            } else {
                reject({ message: 'error' })
            }
        })
    }

    const validateAccount = (): void => {
        const usersCheck = UserData.filter(user =>
            user.username === loginInput.username &&
            user.phone === loginInput.phone &&
            user.email === loginInput.email &&
            user.password === loginInput.password
        )

        if (usersCheck.length === 1) {
            dispatch(addUserId(usersCheck[0].userId))
            dispatch(addUser(usersCheck[0]))
            navigate('/')
        } else {
            alert('akun tidak terdaftar!')
        }
    }

    const submit = async (event: FormEvent<Element>): Promise<void> => {
        event.preventDefault()
        try {
            const validate = await formValidate()
            if (typeof validate === 'object') {
                validateAccount()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const classWrappLabel: string = 'mb-4'
    const classLabel: string = 'text-sm font-medium'
    const classInput: string = 'p-2 text-sm w-full rounded-md bg-white text-slate-900 outline-none focus:ring-1 focus:ring-slate-900 mt-1'

    return (
        <div className="flex max-w-sm mx-auto">
            <div className='flex flex-col w-full justify-center my-auto pb-12 min-h-[100vh] h-auto bg-slate-100 px-8'>
                <h1 className="flex mx-auto font-bold text-2xl text-slate-900">LOGIN</h1>

                <form onSubmit={(event: FormEvent) => submit(event)} className='mt-16 flex flex-col'>
                    <Label
                        htmlFor="username"
                        className={classWrappLabel}
                    >
                        <span id="username" className={classLabel}>Username</span>
                        <Input
                            type="text"
                            placeholder="Enter your username"
                            name='username'
                            value={loginInput.username}
                            handleChange={(event) => handleChange(event)}
                            className={classInput}
                            id="username"
                        />
                    </Label>
                    <Label
                        htmlFor="phone"
                        className={classWrappLabel}
                    >
                        <span id="phone" className={classLabel}>Phone</span>
                        <Input
                            type="tel"
                            placeholder="Enter your phone"
                            name='phone'
                            value={loginInput.phone}
                            handleChange={(event) => handleChange(event)}
                            className={classInput}
                            id="phone"
                        />
                    </Label>
                    <Label
                        htmlFor="email"
                        className={classWrappLabel}
                    >
                        <span id="email" className={classLabel}>Email</span>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            name='email'
                            value={loginInput.email}
                            handleChange={(event) => handleChange(event)}
                            className={classInput}
                            id="email"
                        />
                    </Label>
                    <Label
                        htmlFor="password"
                        className={classWrappLabel}
                    >
                        <span id="password" className={classLabel}>Password</span>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            name='password'
                            value={loginInput.password}
                            handleChange={(event) => handleChange(event)}
                            className={classInput}
                            id="password"
                        />
                    </Label>
                    <Button
                        className='w-full bg-slate-900 rounded-md p-2 mt-2'
                        click={(event: FormEvent) => submit(event)}
                    >
                        <span className='text-white font-semibold'>Login</span>
                    </Button>
                </form>
            </div>
        </div>
    )
}