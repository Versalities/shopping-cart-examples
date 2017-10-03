import React, { Component } from 'react'
import { connect } from 'react-redux'



class Basket extends Component {

  calculatePrice = () => {
    const data = this.props.basket;
    let sum = 0;
    data.forEach((item) => {
      sum += item.price
    });

    return sum
  }

  render(){
    const data = this.props.basket;

    return (
      <div>
        <h2>Basket</h2>
        <div>
          {data.map((i) => {
            return (
              <div key={i.id}>
                <span> {i.title} : {i.price} </span>
              </div>
            )
          })}
          </div>
        <div>
          Total Price: {this.calculatePrice()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  }
}


export default connect(mapStateToProps, null)(Basket)
