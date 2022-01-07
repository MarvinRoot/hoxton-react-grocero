import { useState } from 'react'
import './App.css'
import './reset.css'
import initialGroceries from './data/groceries'
import Header from './Components/Header'
import Main from './Components/Main/Main'

function App() {

  const [groceries, setGroceries] = useState(initialGroceries)
  const [cartItems, setCartItems] = useState([])
  function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
  }

  function listenToAddToCartBtn(item) {
    item.count ++
    setCartItems(getCartItems())
  }

  function listenToRemoveFromCartBtn(item) {
    item.count --
    setCartItems(getCartItems())
  }

  function getCartItems() {
    let updatedGroceries = groceries.filter(item => item.count > 0)
    return updatedGroceries
  }

  function getTotalPrice() {
    let totalPrice = 0
    for(const item of getCartItems()) {
      totalPrice += (item.price * item.count)
    }
    return `£${totalPrice.toFixed(2)}`
  }

  return (
    <div className='app'>
        
        <Header groceries = {groceries} 
        addZeros = {addZeros} 
        listenToAddToCartBtn = {listenToAddToCartBtn}/>

        <Main getCartItems = {getCartItems} 
        addZeros = {addZeros} 
        listenToAddToCartBtn = {listenToAddToCartBtn} 
        listenToRemoveFromCartBtn = {listenToRemoveFromCartBtn}
        getTotalPrice = {getTotalPrice} />
    </div>
  )
}

export default App
