import React, { Component } from 'react'
import './styles.css'

export default class Products extends Component {

  render(){
    return (
      <div className='products-bar'>
        <h2>Products</h2>
        <div className='products'>
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
     <button className = 'button-add' onClick={() => {
          this.addItem()
       } }
           >Add
         </button>
   )
 }

 renderRemoveButton = () => {
   return (
     <button className = 'button-remove' onClick={() => {
          this.removeItem()
       } }
           >Remove
         </button>
   )
 }

  render(){
    const { title, category, price, status } = this.props.data
    let barStatus = (status === 'active' ? 'item-bar-remove' : 'item-bar-add')

    return (
      <div className={`item-bar ${barStatus}`} >
        <h3 className='item-title'>{title}</h3>
        <p className='item-category'>Category: {category}</p>
        <h5 className='item-price'>Price: {price}</h5>
        {status === 'active' ? this.renderRemoveButton() : this.renderAddButton()}
        </div>
    )
  }
}
