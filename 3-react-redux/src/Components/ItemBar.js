import React, { Component } from 'react'

export default class Item extends Component {

 renderAddButton = () => {
   return (
     <button className = 'button-add' onClick={() => {
          this.props.addItem(this.props.data);
       } }
           >Add
         </button>
   )
 }

 renderRemoveButton = () => {
   return (
     <button className = 'button-remove' onClick={() => {
          this.props.removeItem(this.props.data);
       } }
           >Remove
         </button>
   )
 }

  render(){
    const { title, category, price, status } = this.props.data
    let barStatus = (status === 'active' ? 'item-bar-remove' : 'item-bar-add')

    return (
      <div className={`item-bar ${barStatus}`}>
        <h3 className='item-title'>{title}</h3>
        <p className='item-category'>Category: {category}</p>
        <h5 className='item-price'>Price: {price}</h5>
        {status === 'active' ? this.renderRemoveButton() : this.renderAddButton()}
        </div>
    )
  }
}
