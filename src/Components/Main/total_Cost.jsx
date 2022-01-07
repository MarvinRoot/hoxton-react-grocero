function TotalCost(props) {
    return(
        <div className="total-section">
            <div>
              <h3>Total</h3>
            </div>

            <div>
            <span className="total-number">{props.getTotalPrice()}</span>
            </div>
          </div>
    )
}

export default TotalCost