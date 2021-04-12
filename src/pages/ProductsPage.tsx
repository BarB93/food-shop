import React, { useEffect } from 'react'
import ProductItem from 'components/ProductItem'
import { useProductsContext } from 'context/ProductsContext'
import arrow from '../images/right-arrow.svg'
import { IProduct } from 'interfaces'
import classNames from 'classnames'
import CategoriesPopup from 'components/CategoriesPopup'


export default function ProductsPage() {

    const { products,
        filtredProducts, setFiltredProducts,
        sortPriceBy, setSortPriceBy,
        activeCategories,
        isActiveCategoriesPopup, setIsActiveCategoriesPopup
    } = useProductsContext()



    const asc = (first: IProduct, second: IProduct): number => {
        if (first.price > second.price) return 1
        if (first.price < second.price) return -1
        return 0
    }

    const desc = (first: IProduct, second: IProduct): number => {
        if (first.price < second.price) return 1
        if (first.price > second.price) return -1
        return 0
    }

    const handlerClickCategories = () => {
        if (!isActiveCategoriesPopup)
            setIsActiveCategoriesPopup(true)
    }

    const sortPrice = () => {
        if (sortPriceBy === null) setSortPriceBy(true)
        else setSortPriceBy(!sortPriceBy)

        const fn = sortPriceBy ? asc : desc

        const newProducts = [...filtredProducts].sort(fn)

        setFiltredProducts(newProducts)
    }

    useEffect(() => {
        if (activeCategories.size < 1) {
            setSortPriceBy(null)
            setFiltredProducts([...products])
        }
        else {
            setFiltredProducts([...products].filter(item => {
                setSortPriceBy(null)
                return activeCategories.has(item.category.id)
            }))
        }
    }, [activeCategories])

    return (
        <table>
            <thead>
                <tr>
                    <th className={classNames("th-able-sort th-categories", { active: isActiveCategoriesPopup })} onClick={handlerClickCategories}>
                        Category {activeCategories.size > 0 ? `(${activeCategories.size})` : ''} <img alt="arrow" className="th-sort__icon" src={arrow} />
                        <CategoriesPopup />
                    </th>
                    <th>Name</th>
                    <th className="th-able-sort" onClick={() => sortPrice()}>Price <img alt="arrow" className={classNames("th-sort__icon",
                        {
                            asc: sortPriceBy,
                            desc: !sortPriceBy && sortPriceBy != null
                        }
                    )} src={arrow} /></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filtredProducts.map(product => <ProductItem key={product.id} item={product} />)}
            </tbody>
        </table>
    )
}


