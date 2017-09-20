import React, { Component } from 'react'


export default class Basket extends Component {

  render(){
    return (
      <div>
        <h2>Basket</h2>
        <div>
          {this.props.products && this.props.products.map((item) => {
            item.taken == true
          })}
          </div>
        <div>
          Total Price: 0
        </div>
      </div>
    )
  }
}
