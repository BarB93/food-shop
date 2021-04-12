import { ICategory, IProduct } from 'interfaces'
import React, { createContext, useContext, useState } from 'react'

type ProductContextType = {
    products: IProduct[],
    setProducts: (c: IProduct[]) => void

    filtredProducts: IProduct[],
    setFiltredProducts: (c: IProduct[]) => void

    handlePlusToCart(id: number): Map<number, number>
    handleMinusToCart(id: number): Map<number, number>

    addedProducts: Map<number, number>
    totalPrice: number

    sortPriceBy: boolean | null
    setSortPriceBy: (a: boolean) => void

    setCategories: (a: ICategory) => void
    categories: ICategory[] | null

    activeCategories: Set<string>
    setActiveCategories: (a: Set<string>) => void

    isActiveCategoriesPopup: boolean
    setIsActiveCategoriesPopup: (a: boolean) => void

}

const ProductContext = createContext<ProductContextType>({})


const ProductsProvider: React.FC = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState<Map<number, number>>(new Map())
    const [products, setProducts] = useState<IProduct[]>([])
    const [filtredProducts, setFiltredProducts] = useState<IProduct[]>([])
    const [sortPriceBy, setSortPriceBy] = useState<boolean | null>(null)
    const [categories, setCategories] = useState<ICategory[] | null>(null)
    const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set())
    const [isActiveCategoriesPopup, setIsActiveCategoriesPopup] = useState<boolean>(false)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const handlePlusToCart = (id: number) => {
        setAddedProducts(prev => {
            const newProducts = new Map(prev)

            if (prev.get(id)) {
                const newProducts = new Map(prev)
                newProducts.set(id, prev.get(id) + 1)
                return newProducts
            }

            newProducts.set(id, 1)

            return newProducts
        })
    }

    const handleMinusToCart = (id: number) => {
        setAddedProducts(prev => {
            const newProducts = new Map(prev)

            if (!prev.get(id) || prev.get(id) === 1) {
                newProducts.delete(id)
                return newProducts
            }


            newProducts.set(id, prev.get(id) - 1)

            return newProducts
        })
    }


    return (
        <ProductContext.Provider value={{
            products, setProducts,
            filtredProducts, setFiltredProducts,
            handlePlusToCart, handleMinusToCart,
            addedProducts,
            sortPriceBy, setSortPriceBy,
            categories, setCategories,
            activeCategories, setActiveCategories,
            isActiveCategoriesPopup, setIsActiveCategoriesPopup,
            totalPrice, setTotalPrice


        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => useContext(ProductContext)