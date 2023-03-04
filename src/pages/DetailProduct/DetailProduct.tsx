import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TProductData } from '../../@types/Product.types'
import { Button } from '../../components/Button/Button'
import { Description } from '../../components/DescriptionProduct/Description'
import { SizeDescription } from '../../components/DescriptionProduct/SizeDescription'
import { TopDescription } from '../../components/DescriptionProduct/TopDescription'
import { WrappDescription } from '../../components/DescriptionProduct/WrappDescription'
import { ImgDetailProduct } from "../../components/ImgDetailProduct/ImgDetailProduct"
import shirt1 from '../../images/shirt-1.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooksRedux'
import { addToCart } from '../../redux/reducers/cartReducer'

type TCartProduct = {
  userId: number
  idProduct: number
  productName: string
  url: string
  size: string
  price: number
  totalPrice: number
  subTotal: number
  category: string
  description: string
}

export const DetailProduct = () => {
  const [imgProduct, setImgProduct] = useState<{ url: string }[]>([
    {
      url: shirt1
    },
    {
      url: shirt1
    },
    {
      url: shirt1
    }
  ])
  const [productDetail, setProductDetail] = useState({} as TProductData)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [subTotal, setSubTotal] = useState<number>(1)
  const [chooseSize, setChooseSize] = useState<string>('')

  const product = useAppSelector((state) => state.product)
  const users = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  const params = useParams()
  const navigate = useNavigate()

  const getDataProduct = (): void => {
    const getProduct = product.filter(product => product.idProduct === Number(params?.id))
    if (getProduct.length === 1) {
      setProductDetail(getProduct[0])
      setTotalPrice(getProduct[0].price)
    }
  }

  useEffect(() => {
    getDataProduct()
  }, [])

  const backToHome = (): void => {
    navigate('/')
  }

  const clickPlus = (total: number, priceProduct: number): void => {
    setSubTotal(total)
    setTotalPrice((price) => price + priceProduct)
  }
  const clickMinus = (total: number, priceProduct: number): void => {
    setSubTotal(total)
    setTotalPrice((price)=> total === 1 ? productDetail.price : price - priceProduct)
  }

  const clickSize = (size: string): void => {
    setChooseSize(size)
  }

  const updateCart = (): void => {
    const newData: TCartProduct = {
      userId: users.userId,
      idProduct: productDetail.idProduct,
      productName: productDetail.productName,
      url: productDetail.url,
      size: chooseSize,
      price: productDetail.price,
      totalPrice: totalPrice,
      subTotal: subTotal,
      category: productDetail.category,
      description: productDetail.description,
    }
    dispatch(addToCart(newData))
  }

  const pushToCart = (): void => {
    const validateAddToCart = chooseSize === 'S' || chooseSize === 'M' || chooseSize === 'L' || chooseSize === 'XL' || chooseSize === 'XXL' ? true : false

    if (validateAddToCart) {
      updateCart()
    } else {
      alert('please choose size')
    }
  }

  return (
    <div className='flex max-w-sm mx-auto px-4'>
      <div className='flex-col w-full justify-center pb-12 relative'>
        {productDetail.idProduct !== 0 && (
          <>
            <Button
              className='absolute left-4 top-4 bg-slate-900 flex justify-center items-center h-7 w-7 rounded-full z-10 hover:bg-slate-800'
              click={backToHome}
            >
              <i className="fa-solid fa-arrow-left text-white text-sm"></i>
            </Button>
            <div className=''>
              <ImgDetailProduct images={productDetail.detailImg} />
            </div>
            <WrappDescription>
              <TopDescription
                title={productDetail.productName}
                subTotal={subTotal}
                totalPrice={totalPrice}
                clickPlus={() => clickPlus(subTotal + 1, productDetail.price)}
                clickMinus={() => clickMinus(subTotal > 1 ? subTotal - 1 : 1, productDetail.price)}
              />

              <SizeDescription
                size={productDetail?.size}
                clickSize={(size) => clickSize(size)}
                chooseSize={chooseSize}
              />
              <Description desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus fugiat nihil magni quidem similique qui velit fugit enim repellendus. Laboriosam nam nulla libero! Assumenda similique repellendus dolor nulla dolorem.' />

              <Button
                className='flex w-full bg-slate-900 rounded-md p-2 justify-center items-center hover:bg-slate-800 transition duration-150 ease-in-out mt-4'
                click={pushToCart}
              >
                <span className='text-white'>Add to cart</span>
              </Button>
            </WrappDescription>
          </>
        )}
      </div>
    </div>
  )
}