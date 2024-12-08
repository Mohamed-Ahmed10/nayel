export interface Product {
    id: string,
    image: string,
    saleAmount?: number,
    name: string,
    arName: string,
    priceBefore?: number,
    priceAfter?: number
}