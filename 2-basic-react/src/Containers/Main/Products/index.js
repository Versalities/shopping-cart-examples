import React, { Component } from 'react'
import './styles.css'
import Item from './Item'

export default class Products extends Component {
  render() {
    const {manageBasket, products} = this.props;

    return (
      <div className='products-bar'>
        <h2>Products</h2>
        <div className='products'>
          {products.map(item => (
            <Item
              key={item.id}
              data={item}
              manageBasket={manageBasket}
            />
          ))}
          </div>
      </div>
    )
  }
}
