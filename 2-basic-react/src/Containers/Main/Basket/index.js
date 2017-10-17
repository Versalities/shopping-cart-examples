import React, { Component } from 'react'
import './styles.css'


export default class Basket extends Component {

  calculatePrice = () => {
    const data = this.props.basketData;
    let sum = 0;
    data.forEach((item) => {
      sum += item.price
    });

    return sum
  }

  render(){
    const data = this.props.basketData;

    return (
      <div className='basket-bar'>
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
