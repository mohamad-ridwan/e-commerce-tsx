type TDescriptionProps = {
    desc: string
}

export const Description = ({desc}: TDescriptionProps)=> {
  return (
    <div>
        <h1 className='font-semibold text-sm my-3'>Description</h1>

        <p className="text-start text-[0.8rem] text-slate-500">{desc}</p>
    </div>
  )
}