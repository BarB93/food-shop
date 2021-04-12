import { useProductsContext } from 'context/ProductsContext'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const { addedProducts } = useProductsContext()
    const allAddedCount = Array.from(addedProducts.values()).reduce((acc, num) => acc + num, 0)

    return (
        <header>
            <nav className="header-nav">
                <li><NavLink exact to="/" activeClassName="active">Products</NavLink></li>
                <li><NavLink exact to="/cart" activeClassName="active">Cart{allAddedCount > 0 ? `( ${allAddedCount} )` : ''}</NavLink></li>
            </nav>
        </header>
    )
}


