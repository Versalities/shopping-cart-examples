import React, { Component } from 'react'
import './main.css'

//components
import Controls from './Controls'
import Products from './Products'
import Basket from './Basket'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      dataFilter: ""
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.products !== this.state.products){
      this.setState({
        products: newProps.products
      })
    }
  }

  filterData = () => {
    let filterMatch = new RegExp(this.state.dataFilter, 'i');

    return this.state.products.filter(item => filterMatch.test(item.category) );
  }

  setFilter = (arg) => {
    this.setState({
      dataFilter:arg
    })
  }

  addItem = (id) => {
    let pos;
    this.state.products.some((item, i) => {
        if(item.id == id){
          pos = i;
          return true
        }
      })

    this.setState({
      products: [...this.state.products, this.state.products[pos].taken = true]
    })

  }


  render(){
    console.log(this.state.products)
    return (
      <main>
        <Controls
          setFilter={this.setFilter}
          generateData={this.props.generateData}
          />

        <Products
          products={this.filterData()}
          addItem={this.addItem}
          />

        <Basket products={this.state.products}/>
      </main>
    )
  }
}
