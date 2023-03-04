import {ReactNode} from 'react'

type TLabelProps = {
    htmlFor: string
    children: ReactNode
    className: string
}

export const Label = ({htmlFor, children, className}: TLabelProps)=> {
  return <label htmlFor={htmlFor} className={className}>{children}</label>
}