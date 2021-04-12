import { useProductsContext } from 'context/ProductsContext'
import React from 'react'
import CategoriesPopupItem from './CategoriesPopupItem'

function CategoriesPopup() {

    const { categories, setIsActiveCategoriesPopup } = useProductsContext()

    const onClickSelect = () => {
        setIsActiveCategoriesPopup(false)
    }

    return (
        <div className="th-categories__popup">
            <div className="th-categories_items">
                {
                    categories && categories.map((item) => {

                        return <CategoriesPopupItem key={item.id} {...item} />
                    })
                }

            </div>
            <button onClick={onClickSelect}>Select</button>
        </div>
    )
}

export default CategoriesPopup
