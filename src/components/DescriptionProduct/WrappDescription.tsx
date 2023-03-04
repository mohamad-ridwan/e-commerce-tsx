import {ReactNode} from 'react'

type TWrappDescriptionProps = {
    children: ReactNode
}

export const WrappDescription = ({children}: TWrappDescriptionProps)=> {
  return (
    <div className='flex flex-col bg-white shadow-[0_-3px_1px_-1px_rgba(0,0,0,0.1)] mt-[-1.5rem] z-10 rounded-3xl py-5 px-6'>{children}</div>
  )
}