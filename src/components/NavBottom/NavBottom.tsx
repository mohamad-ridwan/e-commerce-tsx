import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooksRedux'

export const NavBottom = () => {
    const users = useAppSelector((state) => state.users.username.toLowerCase().split(' ').join(''))

    return (
        <div className="h-14 left-0 right-0 justify-center fixed flex bottom-0">
            <ul className='w-full max-w-sm justify-between px-8 flex items-center rounded-t-3xl bg-white shadow-[0_-3px_5px_-1px_rgba(0,0,0,0.3)]'>
                <li>
                    <Link to='/'>
                        <i className="fa-solid fa-house text-lg text-red-900"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <i className="fa-solid fa-cart-shopping text-slate-800"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/favorite'>
                        <i className="fa-solid fa-heart text-lg text-slate-800"></i>
                    </Link>
                </li>
                <li>
                    <Link to={`/account/${users}`}>
                        <i className="fa-solid fa-user text-lg text-slate-800"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}