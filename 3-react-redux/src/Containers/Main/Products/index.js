import React, { Component } from 'react'
import { connect } from 'react-redux'

//components
import Item from '../../../Components/ItemBar'

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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default connect(null,  mapDispatchToProps)(Products)
