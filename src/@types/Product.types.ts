export type TProductData = {
    userId: number
    idProduct: number
    url: string
    productName: string
    category: string
    price: number
    description: string
    detailImg: {url: string}[]
    size: {size: string}[]
}