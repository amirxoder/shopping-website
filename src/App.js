import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Navbar from './Components/Navbar'
import ProductDetails from './Components/ProductDetails'
import ShopCart from './Components/ShopCart'
import Store from './Components/Store'
import CartContaxtProvider from './Contexts/CartContaxtProvider'


//context
import ProductContextProvider from './Contexts/ProductContextProvider'
import { GlobalStyle } from './Styles/GlobalStyle'



const App = () => {
  return (
    <ProductContextProvider>
      <CartContaxtProvider>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/store/:id' component={ProductDetails} />
          <Route path='/cart' component={ShopCart} />
          <Route path='/store' component={Store} />
          <Redirect to='/store' />
        </Switch>
      </CartContaxtProvider>
    </ProductContextProvider>
  )
}

export default App
