export interface IProduct {
    id: number
    name: string
    category: ICategory
    price: number
}

export interface IProducts {
    items: IProduct[]
}

export interface IProductItem {
    item: IProduct
}

export interface ICategory {
    id: string
    name: string
}


