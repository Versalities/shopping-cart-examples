import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './App.css';

//containers
import Header from './Containers/Header'
import Main from './Containers/Main'

//services
import MockData from './Services/Generator/mockdata'

@inject("store") @observer class App extends Component {

  componentWillMount() {
    this.generateData(10);
  }

  generateData = (arg) => {
    const {store} = this.props;

    if (arg) {
      let data = MockData(arg);

      for (let item of data) {
        item.status = 'inactive'
      }

      store.generateProducts(data);
    }
  }

  render() {
    const {store: {basket, products}} = this.props;

    return (
      <div>
        <Header />
        <Main
          products={products}
          generateData={this.generateData}
          basketData={basket}
        />
      </div>
    );
  }
}

export default App;
