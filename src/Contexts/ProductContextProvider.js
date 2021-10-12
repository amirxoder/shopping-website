import React, { createContext, useEffect, useState } from 'react'
import { getProduct } from '../Services/api'

export const ProductsContext = createContext()

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProduct())
        }
        return fetchAPI()
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider
