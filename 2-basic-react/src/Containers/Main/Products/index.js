import React, { Component } from 'react'
import _ from 'lodash';


export default class Products extends Component {

  render(){
    return (
      <div>
        <h2>Products</h2>
        <div>
          {this.props.products.map(item => <Item
            key={_.random(1, Number.MAX_VALUE)}
            data={item}
            addItem={this.props.addItem}
            />)}
          </div>
      </div>
    )
  }
}

class Item extends Component {


  render(){
    const { id, title, category, price } = this.props.data

    return (
      <div className='item-bar'>
        <h3>{title}</h3>
        <p>{category}</p>
        <h5>{price}</h5>
        <button onClick={() => this.props.addItem(id)}>Add</button>
        </div>
    )
  }
}
