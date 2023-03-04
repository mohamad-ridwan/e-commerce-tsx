import {ReactNode} from 'react'

type TButtonProps = {
    children: ReactNode
    className: string,
    click?: (anything?: any)=>void
}

export const Button = ({children, className, click}: TButtonProps)=> {
  return <button className={className} onClick={click}>{children}</button>
}