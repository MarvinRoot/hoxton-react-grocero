function Header(props) {
    return (
        <header id="store">
          <h1>Grocero</h1>
          <ul className="item-list store--item-list">
            {props.groceries.map(item => (
              <li className='store--item'>
                <div className='store--item-icon'>
                  <img src={`assets/icons/${props.addZeros(item.id)}-${item.name}.svg`}
                  alt={item.name} />
                </div>
                <button onClick={() => props.listenToAddToCartBtn(item)}>Add to cart</button>
              </li>
            ))
            }
          </ul>
        </header>
    )
}

export default Header