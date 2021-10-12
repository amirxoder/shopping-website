import React, { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductContextProvider'
import Product from './Shared/Product'
import styled from 'styled-components'

const Store = () => {
    const products = useContext(ProductsContext)

    return (

        <ProductsContainer>

            {products.map(product => (
                <Product
                    key={product.id}
                    prodcutData={product}
                />
            ))}
        </ProductsContainer>
    )
}

const ProductsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width:80%;
    margin:0 auto;
    @media (max-width: 768px){
        width:100%;
        padding:0 1rem;
        justify-content:center;
    }
`

export default Store
