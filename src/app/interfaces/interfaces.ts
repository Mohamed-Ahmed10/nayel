export interface Product {
    id: string,
    image: string,
    saleAmount?: number,
    name: string,
    arName: string,
    priceBefore?: number,
    priceAfter?: number,
    category?: string
}

export interface Products {
    abaya?: Product[];
    fabric?: Product[];
    gulfDesigns?: Product[];
    internationalDesigns?: Product[];
    makhawer?: Product[];
}
