import CartItems from './Cart_Items'
import TotalCost from './total_Cost'
function Main(props) {
    return(
        <main id="cart">
          <h2>Your Cart</h2>

          <CartItems getCartItems = {props.getCartItems} 
          addZeros = {props.addZeros} 
          listenToAddToCartBtn = {props.listenToAddToCartBtn} 
          listenToRemoveFromCartBtn = {props.listenToRemoveFromCartBtn}/>

          <TotalCost getTotalPrice = {props.getTotalPrice}/>
        </main>
    )
}
export default Main