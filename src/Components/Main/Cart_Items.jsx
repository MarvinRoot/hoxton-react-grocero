function CartItems(props) {
    return (
        <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
              {props.getCartItems().map(item => (
                <li>
                  <img className='cart--item-icon'
                  src={`assets/icons/${props.addZeros(item.id)}-${item.name}.svg`}
                  alt={`item.name`} />
                  <p>{item.name}</p>
                  <button 
                  className='quantity-btn.remove-btn.center'
                  onClick={() => props.listenToRemoveFromCartBtn(item)}>
                    -</button>

                  <span className='quantity-text.center'>{item.count}</span>
                  
                  <button 
                  className='quantity-btn.add-btn.center'
                  onClick={() => props.listenToAddToCartBtn(item)}>
                    +</button>
                </li>
              ))}
            </ul>
          </div>
    )
}

export default CartItems