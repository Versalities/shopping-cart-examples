import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './styles.css'


@inject("store") @observer class Basket extends Component {
  render(){
    const {basket, totalPrice} = this.props.store;

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
          Total Price: {totalPrice}
        </div>
      </div>
    )
  }
}

export default Basket
