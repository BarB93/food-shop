import { useProductsContext } from 'context/ProductsContext'
import { IProductItem } from 'interfaces'
import React from 'react'

import check from '../images/check.png'

export default function ProductItem({ item }: IProductItem) {

    const { handlePlusToCart, handleMinusToCart, addedProducts } = useProductsContext()

    const onClickPlusToCart = () => handlePlusToCart(item.id)
    const onClickMinusToCart = () => handleMinusToCart(item.id)

    return (
        <tr className={"table-row"}>
            <td className="td-category">{item.category.name}</td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td className={"td-select " + `${addedProducts.get(item.id) ? 'active' : ''}`}>
                <button className="button-minus" onClick={onClickMinusToCart}>-</button><span className="table-action">Select</span><button className="button-plus" onClick={onClickPlusToCart}>+</button>
                <img className="tableImage-check" alt="check" src={check} />
            </td>
        </tr >
    )
}


