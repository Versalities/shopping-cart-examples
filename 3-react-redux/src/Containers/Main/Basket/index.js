import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'



class Basket extends Component {

  calculatePrice() {
    const {basket} = this.props;
    let sum = 0;

    for (let item of basket) {
      sum += item.price;
    };

    return sum;
  }

  render() {
    const {basket} = this.props;

    return (
      <div className='basket-bar'>
        <h2>Basket</h2>
        <div>
          {basket.map((i) => {
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
