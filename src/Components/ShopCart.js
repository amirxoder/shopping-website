
import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContaxtProvider'
import Cart from './Shared/Cart';
import styled from 'styled-components'


const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <Shop>
            <div>
                {state.selectedItems.map(item => (
                    <Cart key={item.id} data={item} dispatch={dispatch} />
                ))}

            </div>
            <ProductsDetails>
                <p>total : {state.itemsCounter}</p>
                <p>total price : {state.total} $</p>
                <button className='btn btn-success   ' onClick={() => dispatch({ type: 'CHECKOUT' })}>CheckOut</button>
                <button className='btn btn-warning ' onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
            </ProductsDetails>


        </Shop>
    )
}

const Shop = styled.div`
    display:flex;
    gap:2rem;
    justify-content:space-between;
    width:70%;
    margin:1rem auto 0 auto;
    @media (max-width: 768px){
        flex-direction:column;
    }
`

const ProductsDetails = styled.div`
    background-color:rgba(0,0,0,0.1);
    height:200px;
    width:300px;
    padding:2rem;
    border-radius:5px;
    p{
        font-size:1.2rem;
        font-weight:500;
    }
    @media (max-width:768px){
        width:100%;
        button{
            width:50%;
            text-align:center;
            
        }
    }
`


export default ShopCart
