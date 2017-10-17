import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './styles.css'

//components
import Item from '../../../Components/ItemBar'

@inject("store") @observer class Products extends Component {

  render(){
    const { store } = this.props;
    return (
      <div className='products-bar'>
        <h2>Products</h2>
        <div className='products'>
          {this.props.products.map(item => (<Item
            key={item.id}
            data={item}
            addItem = {store.addItem}
            removeItem = {store.removeItem}
            />))}
          </div>
      </div>
    )
  }
}

export default Products
