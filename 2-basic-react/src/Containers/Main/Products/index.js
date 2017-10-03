import React, { Component } from 'react'
import _ from 'lodash';


export default class Products extends Component {

  render(){
    return (
      <div>
        <h2>Products</h2>
        <div>
          {this.props.products.map(item => (<Item
            data={item}
            manageBasket={this.props.manageBasket}
            />))}
          </div>
      </div>
    )
  }
}

class Item extends Component {
  constructor(){
    super();
    this.state = {
      status: 'inactive',
      text: 'Add',
    }
  }

 switchState = () => {
   this.setState({
     active: (this.state.active === 'inactive' ? 'active' : 'inactive'),
     text: (this.state.text === 'Add' ? 'Remove' : 'Add')
   })
 }

 addItem = () => {
   this.switchState();
   this.props.manageBasket(this.props.data);
 }

 removeItem = () => {
   this.switchState();
   this.props.manageBasket(this.props.data);
 }

 renderAddButton = () => {
   return (
     <button onClick={() => {
          this.addItem()
       } }
           >{this.state.text}
         </button>
   )
 }

 renderRemoveButton = () => {
   return (
     <button onClick={() => {
          this.removeItem()
       } }
           >{this.state.text}
         </button>
   )
 }

  render(){
    const { title, category, price } = this.props.data

    return (
      <div className='item-bar'>
        <h3>{title}</h3>
        <p>{category}</p>
        <h5>{price}</h5>
        {this.state.active === 'inactive' ? this.renderRemoveButton() : this.renderAddButton()}
        </div>
    )
  }
}
