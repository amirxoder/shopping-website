import React, { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductContextProvider'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {

    const id = props.match.params.id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    const { image, title, description, price } = product


    return (
        <Details>
            <img src={image} alt='productimage' />
            <TextDetails>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <span>{price} $</span>
                    <Link to='/store'>Back</Link>
                </div>
            </TextDetails>
        </Details>
    )
}


const Details = styled.div`
    display:flex;
    margin:5rem;
    border:1px solid gray;
    padding:1rem;
    border-radius:2rem;
    align-items:center;
    gap:2rem;
    background-color:rgba(0,0,0,0.1);

    img{
        width:300px;
        height:300px;
        object-fit:cover;
    }
    @media (max-width: 768px){
        flex-direction:column;
        padding:.5rem;
        img{
        width:200px;
        height:200px;
        object-fit:cover;
    }
    }
`

const TextDetails = styled.div``

export default ProductDetails
