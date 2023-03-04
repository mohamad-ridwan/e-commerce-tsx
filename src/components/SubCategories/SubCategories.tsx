import {useState} from 'react'
import { Button } from '../Button/Button'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TDesktop, TMobile, TSuperLargeDesktop, TTablet } from '../../@types/Carousel.types';

export type TCategoryName = {
    category: string
}

type TSubCategoriesProps = {
    category: TCategoryName[]
    handleCategory: (ctg: string)=>void
}

export const SubCategories = ({ category, handleCategory }: TSubCategoriesProps) => {
    const [categoryActive, setCategoryActive] = useState<null | number>(0)
    const responsive: TSuperLargeDesktop | TDesktop | TTablet | TMobile = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const clickCategory = (index: number):void=>{
        setCategoryActive(index)
    }

    return (
        <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
        className="mb-6 z-10"
        >
            {category.length > 0 && category.map((category, index) => (
                <Button key={index} className={`${index === categoryActive ? 'bg-slate-900' : 'bg-white'} text-slate-800 border-solid border-2 border-slate-800 font-semibold text-xs py-2 px-3 rounded w-11/12 hover:bg-slate-800 group transition duration-150 ease-in-out`} click={() => {
                    handleCategory(category.category)
                    clickCategory(index)
                }}>
                    <small className={`text-xs group-hover:text-white ${index === categoryActive ? 'text-white' : 'text-slate-900'}`}>{category.category}</small>
                </Button>
            ))}
        </Carousel>
    )
}