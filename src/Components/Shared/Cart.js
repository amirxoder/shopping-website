import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../Contexts/CartContaxtProvider'
import { shoren } from '../Helpers/function'


const Cart = ({ data }) => {
    const { dispatch } = useContext(CartContext)

    return (
        <CartBox>
            <img src={data.image} alt='product' />
            <div className='description'>
                <h4>{shoren(data.title)}</h4>
                <p className='desc'>{data.description}</p>
                <p className='my-1'>{data.price} $</p>
                <p className='quantity bg-dark text-light text-center rounded-circle'>{data.quantity}</p>
            </div>
            <div>
                {data.quantity > 1 ?
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'DECREASE', payload: data })}>-</button> :
                    <button className='btn btn-danger' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: data })}>remove</button>}
            </div>
        </CartBox>
    )
}

const CartBox = styled.div`
    width:800px;
    height:200px;
    background-color:red;
    border-radius:5px;
    background-color:rgba(0,0,0,0.1);
    padding:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 1rem 0;
    position: relative;
    .quantity{
        position: absolute;
        top:-10px;
        right:0;
        display:inline-block;
        width:20px;
        line-height:20px;
        height:20px;
    }
    img{
        width:120px;
        height:170px;
        object-fit:cover;
    }
    
    .description{
        width:500px;
    }
    @media (max-width: 768px){
        width:300px;
        margin:1rem auto;
        height:500px;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        
        h4{
            font-size:1rem;
        
        }

        p{
            max-width:200px;
            text-align:center;
            margin:auto;
        }
        img{
            width:190px;

        }
        .desc{
            max-height:120px;
            overflow:scroll;
        }
    }

`

export default Cart
