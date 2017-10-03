import React, { Component } from 'react'
import { connect } from 'react-redux'

//actions
import { addItem, removeItem } from '../../../Redux/Actions/basketActions'

class Products extends Component {

  render(){
    return (
      <div>
        <h2>Products</h2>
        <div>
          {this.props.products.map(item => (<Item
            key={item.id}
            data={item}
            addItem = {this.props.addItem}
            removeItem = {this.props.removeItem}
            />))}
          </div>
      </div>
    )
  }
}

class Item extends Component {

 addItem = () => {
   this.props.addItem(this.props.data);
 }

 removeItem = () => {
   this.props.removeItem(this.props.data);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default connect(null,  mapDispatchToProps)(Products)
