import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContaxtProvider'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const { state } = useContext(CartContext)

    return (
        <Nav>
            <NavContainer>
                <Back to='/store' className='btn-outline-secondary btn'>Store</Back>
                <ShopBadge>
                    <Link to='/cart'>
                        <i className='bx bxs-shopping-bag text-light'></i>
                    </Link>
                    <span>{state.itemsCounter}</span>
                </ShopBadge>
            </NavContainer>
        </Nav>
    )
}

const Nav = styled.nav`
    width:100%;
    background-color:#1769aa;
    padding:1rem 0;
    position: sticky;
    z-index:100;
    top:0;
`

const NavContainer = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80%;
    margin:0 auto;
    color:#fff;
    @media (max-width: 768px){
        width:90%;
    }

`;

const Back = styled(Link)`
    color:#fff;
`;

const ShopBadge = styled.div`
    position: relative;
    width:30px;
    height:30px;
    /* background-color:red; */
    display:flex;
    align-items:center;
    justify-content:center;
    i{
        font-size:1.8rem;
    }
    span{
        position: absolute;
        top:-5px;
        right:-7px;
        background-color:#00897b;
        border-radius:50%;
        font-size:.9rem;
        display:inline-block;
        width:20px;
        height:20px;
        text-align:center;
        line-height:20px;
    }

`

export default Navbar
