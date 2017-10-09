import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class Item extends Component {

 renderAddButton = () => {
   return (
     <button onClick={() => {
          this.props.addItem(this.props.data);
       } }
           >Add
         </button>
   )
 }

 renderRemoveButton = () => {
   return (
     <button onClick={() => {
          this.props.removeItem(this.props.data);
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

export default Item;
