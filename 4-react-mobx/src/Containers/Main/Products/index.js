import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

//components
import Item from '../../../Components/ItemBar'

@inject("store") @observer class Products extends Component {

  render(){
    console.log('ПРодукты',this.props.products )
    const { store } = this.props;
    return (
      <div>
        <h2>Products</h2>
        <div>
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
