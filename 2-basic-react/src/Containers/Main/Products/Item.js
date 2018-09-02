import React, { Component } from 'react'
import './styles.css'

export default class Item extends Component {

  addItem = () => {
    this.props.manageBasket(this.props.data);
  }

  removeItem = () => {
    this.props.manageBasket(this.props.data);
  }

  renderButton(status) {
    const config = {
      className: status !== "active" ? "button-add" : "button-remove",
      action: status !== "active" ? this.addItem : this.removeItem,
      text: status !== "active" ? "Add" : "Remove"
    }

    return (
      <button
        className = {config.className}
        onClick={() => {
          config.action()
        }}>
          {config.text}
      </button>
    )
  }

  render() {
    const {title, category, price, status} = this.props.data;
    const barStatus = (status === 'active' ? 'item-bar-remove' : 'item-bar-add');

    return (
      <div className = {`item-bar ${barStatus}`}>
        <h3 className = 'item-title'>
          {title}
        </h3>
        <p className = 'item-category'>
          Category: {category}
        </p>
        <h5 className = 'item-price'>
          Price: {price}
        </h5>
          {this.renderButton(status)}
        </div>
    )
  }
}
