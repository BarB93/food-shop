import CartItem from 'components/CartItem'
import { useProductsContext } from 'context/ProductsContext'
import React, { useEffect } from 'react'

function CartPage() {
    const { products, addedProducts, totalPrice, setTotalPrice } = useProductsContext()

    useEffect(() => {
        const price = products.reduce((acc, prod) => {
            if (addedProducts.has(prod.id)) {
                return acc + prod.price * addedProducts.get(prod.id)
            }

            return acc
        }, 0)

        setTotalPrice(price.toFixed(2))


    }, [addedProducts])

    const handlerButtonBuy = () => {
        let result = 'Ваш заказ:\n\n'
        products.forEach(item => {
            if (addedProducts.has(item.id)) {
                result += `- ${item.name}: ${addedProducts.get(item.id)}ps $${(item.price * addedProducts.get(item.id)?.toFixed(2))}\n`
            }
        })
        result += `\nTotal price: $${totalPrice}`

        alert(result)
    }

    if (addedProducts.size < 1) return <h1 className="cart-empty">Cart empty(&#707;&#706;)</h1>

    return (
        <>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th className="th-categories">Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.filter(product => addedProducts.has(product.id)).map(prod => <CartItem key={prod.id} item={prod} />)}
                </tbody>
            </table>
            <div className="cart_footer">
                <div className="cart_total-price"><span>Total price:</span> ${totalPrice}</div>
                <button className="cart_button" onClick={handlerButtonBuy}>Buy</button>
            </div>
        </>
    )
}

export default CartPage
