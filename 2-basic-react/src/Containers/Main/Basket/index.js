import React, { Component } from 'react'


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
      <div>
        <h2>Basket</h2>
        <div>
          {data.map((i) => {
            return (
              <div>
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
