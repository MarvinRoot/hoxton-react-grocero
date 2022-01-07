import { useState } from 'react'
import './App.css'
import './reset.css'
import initialGroceries from './data/groceries'

function App() {

  const [groceries, setgroceries] = useState(initialGroceries)

  function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
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
        <header id="store">
          <h1>Grocero</h1>
          <ul className="item-list store--item-list">
            {groceries.map(item => (
              <li className='store--item'>
                <div className='store--item-icon'>
                  <img src={`assets/icons/${addZeros(item.id)}-${item.name}.svg`} alt={item.name} />
                </div>
                <button>Add to cart</button>
              </li>
            ))
            }
          </ul>
        </header>

        <main id="cart">
          <h2>Your Cart</h2>

          <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
              Take a look at cart-item.html
            </ul>
          </div>

          <div className="total-section">
            <div>
              <h3>Total</h3>
            </div>

            <div>
            <span className="total-number">{getTotalPrice()}</span>
            </div>
          </div>
        </main>
    </div>
  )
}

export default App
