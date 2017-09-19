import React, { Component } from 'react'
import _ from 'lodash';


export default class Products extends Component {

  render(){
    return (
      <div>
        <h2>Products</h2>
        <div>
          {this.props.products.map(item => <Item key={_.random(1, Number.MAX_VALUE)} data={item} />)}
          </div>
      </div>
    )
  }
}

class Item extends Component {
  render(){
    const { title, category, price } = this.props.data
    return (
      <div className='item-bar'>
        <h3>{title}</h3>
        <p>{category}</p>
        <h5>{price}</h5>
        <button>Add</button>
        </div>
    )
  }
}
