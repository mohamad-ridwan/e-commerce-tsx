import {ChangeEvent} from 'react'

type TInputProps = {
    type: string
    placeholder: string
    name: string
    value: string | number
    handleChange: (event: ChangeEvent<HTMLInputElement>)=>void
    className: string
    id: string
}

export const Input = ({type, placeholder, name, value, handleChange, className, id}: TInputProps)=> {
  return <input type={type} placeholder={placeholder} name={name} value={value} onChange={(event)=>handleChange(event)} className={`flex flex-col ${className}`} id={id}/>
}