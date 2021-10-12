import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../../Contexts/CartContaxtProvider'
import { isInCart, quantityCounter, shoren } from '../Helpers/function'



const Product = ({ prodcutData }) => {

    const { state, dispatch } = useContext(CartContext)


    return (
        <ProductCart>
            <img src={prodcutData.image} alt='productimage' />
            <h3>{shoren(prodcutData.title)}</h3>
            <p>{prodcutData.price}$</p>
            <div className='btns'>
                <Link className='btn btn-outline-primary' to={`store/${prodcutData.id}`}>Datails</Link>
                <div>
                    {quantityCounter(state, prodcutData.id) === 1 && <button className=' mx-1 btn btn-primary small' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: prodcutData })}><i className='bx bxs-trash' ></i></button>}
                    {quantityCounter(state, prodcutData.id) > 1 && <button className=' mx-1 btn btn-primary small' onClick={() => dispatch({ type: 'DECREASE', payload: prodcutData })}><i className='bx bx-minus' ></i></button>}
                    {
                        isInCart(state, prodcutData.id) ?
                            <button className='btn btn-primary small mx-1 ' onClick={() => dispatch({ type: 'INCREASE', payload: prodcutData })}><i className='bx bx-plus' ></i></button> :
                            <button className='btn btn-primary small mx-1 ' onClick={() => dispatch({ type: 'ADD_ITEM', payload: prodcutData })}><i className='bx bxs-cart-add'></i></button>
                    }
                </div>
            </div>

        </ProductCart>
    )
}

const ProductCart = styled.div`
    width:280px;
    height:380px;
    background-color:#f5f5f5;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:1rem;
    overflow:hidden;
    margin:1rem;
    img{
        width:100%;
        height:250px;
        object-fit:cover;
    }
    h3{
        font-size:1rem;
        margin: .6rem 1rem;  
        font-size:.8rem;
        font-weight:bold;
        margin:0 1rem;
    }
    .btns{
        display:flex;
        width:100%;
        padding:.5rem;
        justify-content:space-between;
    }
    @media (max-width: 768px){
        
    }
`

export default Product
