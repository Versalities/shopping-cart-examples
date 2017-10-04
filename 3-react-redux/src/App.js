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
      this.props.generateData(MockData(arg))
    }
  }

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
