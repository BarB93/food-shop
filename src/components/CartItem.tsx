import { useProductsContext } from 'context/ProductsContext'
import { IProductItem } from 'interfaces'
import React from 'react'

export default function CartItem({ item }: IProductItem) {

    const { handlePlusToCart, handleMinusToCart, addedProducts } = useProductsContext()

    const onClickPlusToCart = () => handlePlusToCart(item.id)
    const onClickMinusToCart = () => handleMinusToCart(item.id)

    const quantity: number = addedProducts.get(item.id)

    return (
        <tr className={"table-row"}>
            <td className="td-category">{item.category.name}</td>
            <td>{item.name}</td>
            <td>{quantity}</td>
            <td>${(item.price * quantity).toFixed(2)}</td>
            <td>
                <button className="button-minus" onClick={onClickMinusToCart}>-</button><span className="table-action">Select</span><button className="button-plus" onClick={onClickPlusToCart}>+</button>
            </td>
        </tr >
    )
}