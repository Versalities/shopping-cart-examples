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
      let data = MockData(arg);

      data.forEach((item) => {
        item.status = 'inactive'
      })

    this.setState({
      productsData: data,
      basketData: [],
    })
  }
  }

  changeItemActivity = (item) => {
    let { productsData } = this.state;

    const index = productsData.indexOf(item);

    productsData[index].status === 'inactive' ?
      productsData[index].status = 'active' :
        productsData[index].status = 'inactive'

        this.setState({
          productsData: productsData
        })
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

    this.changeItemActivity(item)
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
