import { Button } from "../Button/Button"

type TCardProductProps = {
  classWrappImg: string
  classimg: string
  url: string
  productName: string
  price: number
  toDetail: ()=>void
  addToFavorite: ()=>void
  classIconFav: string
}

export const CardProduct = ({
  classWrappImg,
  classimg,
  url,
  productName,
  price,
  toDetail,
  addToFavorite,
  classIconFav
}: TCardProductProps) => {
  return (
    <div className="flex flex-col w-[46%] h-64 gap-1">
      <div className={classWrappImg}>
        <img src={url} alt="" className={classimg} />
        <Button 
        className="flex justify-center items-center cursor-pointer h-8 w-8 rounded-full bg-white absolute right-1 top-1 group"
        click={addToFavorite}
        >
          <i className={`fa-solid fa-heart text-lg ${classIconFav} group-hover:text-rose-800 transition duration-150 ease-in-out`}></i>
        </Button>
      </div>
      <div className="flex flex-col items-center relative">
        <span className="text-sm text-center mt-4">{productName}</span>
        <span className="text-sm font-bold text-center">${price}</span>
        <button className="absolute flex justify-center transition duration-150 ease-in-out items-center h-10 w-10 group hover:bg-white bg-slate-800 cursor-pointer rounded-full t-0 mt-[-1.7rem] shadow-lg" onClick={toDetail}>
          <i className="fa-solid fa-cart-shopping group-hover:text-slate-800 text-white text-lg"></i>
        </button>
      </div>
    </div>
  )
}