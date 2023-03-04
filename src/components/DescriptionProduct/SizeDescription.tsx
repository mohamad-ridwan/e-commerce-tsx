import { Button } from '../Button/Button'

type TSizeDescription = {
    size: {size: string}[]
    clickSize: (size: string)=>void
    chooseSize: string
}

export const SizeDescription = ({size, clickSize, chooseSize}: TSizeDescription)=> {
  return (
    <div>
        <h1 className='font-semibold text-sm my-3'>Size</h1>
        <ul className='flex'>
            {size?.length > 0 && size?.map((size, index)=>(
                <li key={index}>
                <Button
                className={`flex h-9 w-9 rounded-full ${size.size === chooseSize ? 'bg-slate-900 border-slate-900' : 'bg-white'} mr-3 border-solid border-2 border-slate-300 justify-center items-center hover:bg-slate-900 hover:border-slate-900 group transition duration-150 ease-in-out`}
                click={()=>clickSize(size.size)}
                >
                    <span className={`text-[0.8rem] font-bold ${size.size === chooseSize ? 'text-white' : 'text-slate-600'} group-hover:text-slate-50`}>{size.size}</span>
                </Button>
            </li>
            ))}
        </ul>
    </div>
  )
}