import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class Item extends Component {

  renderButton(status) {
    const {addItem, removeItem, data} = this.props;
    const config = {
      className: status !== "active" ? "button-add" : "button-remove",
      action: status !== "active" ? (data) => addItem(data) : (data) => removeItem(data),
      text: status !== "active" ? "Add" : "Remove"
    }

    return (
      <button
        className={config.className}
        onClick={() => {
          config.action(data)
        }}>
          {config.text}
      </button>
    )
  }

  render() {
    const {title, category, price, status} = this.props.data;
    const barStatus = (status === 'active' ? 'item-bar-remove' : 'item-bar-add');

    return (
      <div className={`item-bar ${barStatus}`}>
        <h3 className='item-title'>
          {title}
        </h3>
        <p className='item-category'>
          Category: {category}
        </p>
        <h5 className='item-price'>
          Price: {price}
        </h5>
          {this.renderButton(status)}
        </div>
    )
  }
}

export default Item;
