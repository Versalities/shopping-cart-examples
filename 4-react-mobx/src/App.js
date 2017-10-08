import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './App.css';

//containers
import Header from './Containers/Header'
import Main from './Containers/Main'

//services
import MockData from './Services/Generator/mockdata'

@inject("store") @observer class App extends Component {

  componentWillMount(){
    this.generateData(10);
  }

  generateData = (arg) => {
    if(arg){
      let data = MockData(arg);

      data.forEach((item) => {
        item.status = 'inactive'
      })

      this.props.store.generateProducts(data)
  }
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <Header />
        <Main
          products={store.products}
          generateData = {this.generateData}
          basketData = {store.basket}
          />
        </div>
    );
  }
}

export default App;
