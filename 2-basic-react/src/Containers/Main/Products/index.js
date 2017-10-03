import React, { Component } from 'react'

export default class Products extends Component {

  render(){
    return (
      <div>
        <h2>Products</h2>
        <div>
          {this.props.products.map(item => (<Item
            key={item.id}
            data={item}
            manageBasket={this.props.manageBasket}
            />))}
          </div>
      </div>
    )
  }
}

class Item extends Component {

 addItem = () => {
   this.props.manageBasket(this.props.data);
 }

 removeItem = () => {
   this.props.manageBasket(this.props.data);
 }

 renderAddButton = () => {
   return (
     <button onClick={() => {
          this.addItem()
       } }
           >Add
         </button>
   )
 }

 renderRemoveButton = () => {
   return (
     <button onClick={() => {
          this.removeItem()
       } }
           >Remove
         </button>
   )
 }

  render(){
    const { title, category, price, status } = this.props.data

    return (
      <div className='item-bar'>
        <h3>{title}</h3>
        <p>{category}</p>
        <h5>{price}</h5>
        {status === 'active' ? this.renderRemoveButton() : this.renderAddButton()}
        </div>
    )
  }
}
