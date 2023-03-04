import './ImgDetailProduct.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TDesktop, TMobile, TSuperLargeDesktop, TTablet } from '../../@types/Carousel.types';

type TImgDetailProdutProps = {
    images: {url: string}[]
}

export const ImgDetailProduct = ({images}: TImgDetailProdutProps) => {
    const responsive: TSuperLargeDesktop | TDesktop | TTablet | TMobile = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
        responsive={responsive}
        showDots={true}
        dotListClass="custom-dot-list-style"
        >
            {images?.length > 0 && images?.map((url, index)=>(
                <img key={index} src={url.url} alt="" className='h-[30rem] w-full object-cover' />
            ))}
        </Carousel>
    )
}