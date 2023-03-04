type TBreakPoint = {
    max: number,
    min: number
}

type TResponsiveNumberCarousel = {
    breakpoint: TBreakPoint
    items: number
}

export type TSuperLargeDesktop = {
    superLargeDesktop: TResponsiveNumberCarousel
}
export type TDesktop = {
    desktop: TResponsiveNumberCarousel
}
export type TTablet = {
    tablet: TResponsiveNumberCarousel
}
export type TMobile = {
    mobile: TResponsiveNumberCarousel
}