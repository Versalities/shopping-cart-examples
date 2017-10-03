import React, { Component } from 'react';
import './App.css';

//containers
import Header from './Containers/Header'
import Main from './Containers/Main'

//services
import MockData from './Services/Generator/mockdata'

class App extends Component {
  constructor(){
    super();
    this.state = {
      productsData : [],
      basketData: [],
    }
  }

  componentWillMount(){
    this.generateData(10);
  }

  generateData = (arg) => {
    if(arg){
    this.setState({
      productsData: MockData(arg),
      basketData: [],
    })
  }
  }

  manageBasket = (item) => {
    let { basketData } = this.state;

    const index = basketData.indexOf(item);
    if (index >= 0) {
      basketData.splice(index, 1);
    } else {
      basketData.push(item)
    }

    this.setState({
      basketData: basketData
    })
  }


  render() {
    return (
      <div>
        <Header />
        <Main
          products={this.state.productsData}
          generateData = {this.generateData}
          manageBasket = {this.manageBasket}
          basketData = {this.state.basketData}
          />
        </div>
    );
  }
}

export default App;
