import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import discount from '../../images/discount-home.jpg'
import { SubCategories, TCategoryName } from '../../components/SubCategories/SubCategories'
import { NavBottom } from '../../components/NavBottom/NavBottom'
import { Product } from '../../components/Product/Product'
import { Button } from '../../components/Button/Button'
import { TProductData } from '../../@types/Product.types'
import { addToFavorite, TStateFavoriteReducer } from '../../redux/reducers/favoriteReducer'
import { addUserIdProduct } from '../../redux/reducers/productReducer'

export const Home = () => {
  const [category, setCategory] = useState<TCategoryName[]>([
    {
      category: 'All Categories'
    },
    {
      category: 'Man'
    },
    {
      category: 'Women'
    },
    {
      category: 'Kids'
    },
    {
      category: 'Parent'
    },
    {
      category: 'Couple'
    },
  ])
  const product = useAppSelector((state)=>state.product)
  const [productFilter, setProductFilter] = useState<TProductData[]>([])

  const users = useAppSelector((state) => state.users)
  const productFavorite = useAppSelector((state) => state.favorite.product)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const updateCategory = (): void=>{
    let newCategory: TCategoryName[] = []
    let count: number = 0

    for(let i: number = 0; i < category.length; i++){
      const ctgIsAvailable = product.filter(item=>item.category === category[i].category.toLowerCase())
      if(ctgIsAvailable.length > 0){
        const getFirstText = ctgIsAvailable[0].category.split('')[0].toUpperCase()
        const joinNewCategory = `${getFirstText}${ctgIsAvailable[0].category.substring(1)}`
        newCategory.push({category: joinNewCategory})
      }
      count += 1
    }

    if(count === category.length){
      newCategory.unshift({category: 'All Categories'})
      setCategory(newCategory)
    }
  }

  useEffect(()=>{
    dispatch(addUserIdProduct(users.userId))
    updateCategory()
    setProductFilter(product)
  }, [product])

  const toMyAccount = (): void => {
    navigate(`/account/${users.username}`)
  }

  const handleCategory = (ctg: string):void=>{
    const selectCategory = product.filter(item=> item.category === ctg.toLowerCase())
    setProductFilter(ctg.toLowerCase() === 'all categories' ? product : selectCategory)
  }

  const toFavorite = (product: TProductData): void=>{
    const newProduct: TStateFavoriteReducer = {
      userId: users.userId,
      idProduct: product.idProduct,
      productName: product.productName,
      url: product.url,
      size: product.size,
      price: product.price
    }
    dispatch(addToFavorite(newProduct))
  }

  return (
    <div className='flex max-w-sm mx-auto p-4'>
      <div className='flex-col w-full justify-center pb-12'>
        {users.isVerification && (
          <div className='flex w-full justify-end'>
            <Button
              className=''
              click={toMyAccount}>

              <img src={users.image} alt="" className='h-12 w-12 rounded-full' />
            </Button>
          </div>
        )}

        <img src={discount} alt="" className='mt-8 rounded-md object-cover mb-6' />

        <SubCategories 
        category={category}
        handleCategory={handleCategory}
        />

        <Product
          product={productFilter}
          addToFavorite={toFavorite}
        />
      </div>

      <NavBottom />
    </div>
  )
}