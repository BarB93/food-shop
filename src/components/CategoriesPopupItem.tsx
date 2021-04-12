import { useProductsContext } from 'context/ProductsContext'
import React from 'react'



function CategoriesPopupItem({ id }) {
    const { activeCategories, setActiveCategories } = useProductsContext()

    const handlerClick = (e: MouseEvent) => {
        if (e.target.checked) {

            const newCat = new Set(Array.from(activeCategories))
            newCat.add(e.target.value)
            setActiveCategories(newCat)
        } else {
            const newCat = new Set(Array.from(activeCategories))
            newCat.delete(e.target.value)
            setActiveCategories(newCat)
        }

    }

    return (
        <div className="th-categories_item"><label><input type="checkbox" checked={activeCategories.has(id) ? true : false} value={id} onClick={handlerClick} />{id}</label></div>
    )
}

export default CategoriesPopupItem
