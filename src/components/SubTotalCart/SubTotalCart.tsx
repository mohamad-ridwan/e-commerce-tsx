import { Button } from '../Button/Button'

type TSubtotalCartProps = {
    subTotal: number
    shipping: number
    total: number
    toCheckout: ()=>void
}

export const SubTotalCart = ({subTotal, shipping, total, toCheckout}: TSubtotalCartProps)=> {
    const USDollarSubTotal = new Intl.NumberFormat('en-US').format(subTotal)
    const USDollarShipping = new Intl.NumberFormat('en-US').format(shipping)
    const USDollarTotal = new Intl.NumberFormat('en-US').format(total)

  return (
    <div>
        <div className='flex justify-between my-3'>
            <span className='text-sm text-slate-600'>Sub total</span>
            <span className='text-md font-semibold'>${USDollarSubTotal}</span>
        </div>
        <div className='flex justify-between my-3 border-dashed border-b-2 pb-4'>
            <span className='text-sm text-slate-600'>Shipping</span>
            <span className='text-md font-semibold'>${USDollarShipping}</span>
        </div>
        <div className='flex justify-between my-3'>
            <span className='text-sm text-slate-600'>Total</span>
            <span className='text-md font-semibold'>${USDollarTotal}</span>
        </div>

        <Button
        className='w-full flex justify-center bg-slate-900 p-2 rounded-md mt-4'
        click={toCheckout}
        >
            <span className='text-white'>Checkout</span>
        </Button>
    </div>
  )
}