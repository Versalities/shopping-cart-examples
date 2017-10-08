import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


@inject("store") @observer class Basket extends Component {
  
  render(){
    const data = this.props.store.basket;

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
          Total Price: {this.props.store.totalPrice}
        </div>
      </div>
    )
  }
}

export default Basket
