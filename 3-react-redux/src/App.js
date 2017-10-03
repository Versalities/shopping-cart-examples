import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

//containers
import Header from './Containers/Header'
import Main from './Containers/Main'

//services
import MockData from './Services/Generator/mockdata'

//actions
import { generateData } from './Redux/Actions/productsActions'

class App extends Component {
  constructor(){
    super();
    this.state = {
      basketData: [],
    }
  }

  componentWillMount(){
    this.generateData(10);
  }

  generateData = (arg) => {
    if(arg){
      let data = MockData(arg);

      data.forEach((item) => {
        item.status = 'inactive'
      })

      this.props.generateData(data)
    }
  }

/*  changeItemActivity = (item) => {
    let { productsData } = this.state;

    const index = productsData.indexOf(item);

    productsData[index].status === 'inactive' ?
      productsData[index].status = 'active' :
        productsData[index].status = 'inactive'

        this.setState({
          productsData: productsData
        })
  } */

  render() {
    return (
      <div>
        <Header />
        <Main
          products={this.props.products}
          generateData = {this.generateData}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateData: (data) => dispatch(generateData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
