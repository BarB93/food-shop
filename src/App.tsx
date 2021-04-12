import Header from 'components/Header'
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import './styles/style.css'

import { productsApi } from './api/api'
import ProductsPage from 'pages/ProductsPage'
import CartPage from 'pages/CartPage'
import { useProductsContext } from 'context/ProductsContext'

export default function App() {

    const { setProducts, setCategories, setFiltredProducts } = useProductsContext()


    useEffect(() => {
        productsApi.getProducts()
            .then(response => {
                setProducts(response)
                setFiltredProducts(response)
            })

        productsApi.getCategory()
            .then(response => {
                setCategories(response)
            })
    }, [])

    return (
        <>
            <Header />
            <main className="container">
                <Route exact path="/" component={ProductsPage} />
                <Route exact path="/cart" component={CartPage} />
            </main>
        </>
    )
}


