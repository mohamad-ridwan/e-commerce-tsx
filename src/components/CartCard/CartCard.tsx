import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

type TCartCardProps = {
    productName: string
    urlImg: string
    size?: string
    totalPrice: number
    subTotal?: number
    display?: string
    clickPlus?: () => void
    clickMinus?: () => void
    clickDelete: () => void
    pathToDetail: string
}

export const CartCard = ({
    productName,
    urlImg,
    size,
    totalPrice,
    subTotal,
    display,
    clickPlus,
    clickMinus,
    clickDelete,
    pathToDetail
}: TCartCardProps) => {
    const USDollarTotalPrice = new Intl.NumberFormat('en-US').format(totalPrice)

    return (
        <div className='flex w-full p-4 bg-[#f1f1f1] rounded-md mb-6'>
            <Link to={pathToDetail}>
                <img src={urlImg} alt="" className='h-20 w-20 object-cover mr-3 rounded' />
            </Link>
            <div className='flex flex-col w-[70%]'>
                <div className='flex justify-between w-full'>
                    <Link to={pathToDetail}>
                    <h1 className='text-[0.85rem] font-semibold text-start'>{productName}</h1>
                    </Link>
                    <Button
                        className='mt-[-0.6rem]'
                        click={clickDelete}
                    >
                        <i className="fa-solid fa-trash-can text-[0.8rem] text-red-500"></i>
                    </Button>
                </div>
                <span className='text-[0.8rem] text-slate-500'>{size ? `Size ${size}` : ''}</span>
                <div className='flex justify-between mt-3'>
                    <span className='font-bold text-[0.85rem]'>${USDollarTotalPrice}</span>
                    <div className={`bg-[#ddd] py-[0.1rem] ${display}`}>
                        <Button
                            className='px-2 font-semibold text-sm'
                            click={clickMinus}
                        >
                            -
                        </Button>
                        <span className='font-semibold text-[0.8rem]'>{subTotal}</span>
                        <Button
                            className='px-2 font-semibold text-sm'
                            click={clickPlus}
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}