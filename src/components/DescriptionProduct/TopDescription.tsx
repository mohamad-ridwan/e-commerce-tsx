import { Button } from "../Button/Button"

type TTopDescriptionProps = {
    title: string
    subTotal: number
    totalPrice: number
    clickPlus: ()=>void
    clickMinus: ()=>void
}

export const TopDescription = ({ title, subTotal, totalPrice, clickPlus, clickMinus }: TTopDescriptionProps) => {
    const USDollar = new Intl.NumberFormat('en-US').format(totalPrice)

    return (
        <>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-sm'>{title}</h1>
                <div className='bg-slate-100 py-[0.1rem]'>
                    <Button className='px-2 font-semibold text-sm' click={clickMinus}>-</Button>
                    <span className='font-semibold text-[0.8rem]'>{subTotal}</span>
                    <Button className='px-2 font-semibold text-sm' click={clickPlus}>+</Button>
                </div>
            </div>
            <span className='text-[0.8rem] font-semibold'>${USDollar}</span>
        </>
    )
}