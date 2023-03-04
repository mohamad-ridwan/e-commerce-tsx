import { useNavigate } from 'react-router-dom'
import { TProductData } from '../../@types/Product.types'
import { useAppSelector } from '../../redux/hooksRedux'
import { CardProduct } from '../CardProduct/CardProduct'

type TProductProps = {
  product: TProductData[]
  addToFavorite: (product: TProductData) => void
}

export const Product = ({ product, addToFavorite }: TProductProps) => {
  const productFavorite = useAppSelector((state) => state.favorite.product)
  const navigate = useNavigate()

  const toDetail = (path: string): void => {
    navigate(path)
  }
  return (
    <div className='flex flex-wrap justify-between gap-3'>
      {product.length > 0 && product.map((product, index) => {
        const productIsFavorite = productFavorite.filter(item=>
          item.userId === product.userId &&
          item.idProduct === product.idProduct
          )
        return (
          <CardProduct
            key={index}
            classIconFav={productIsFavorite.length === 1 ? 'text-rose-900' : 'text-slate-900'}
            classWrappImg='relative h-3/4'
            classimg='rounded-xl h-full w-full object-cover'
            url={product.url}
            productName={product.productName}
            price={product.price}
            addToFavorite={() => addToFavorite(product)}
            toDetail={() => toDetail(`/detail-product/${product.idProduct}`)}
          />
        )
      })}
    </div>
  )
}