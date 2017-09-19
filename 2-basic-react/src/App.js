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
      dataFilter: "",
    }
  }

  componentWillMount(){
    this.generateData(10);
  }

  generateData = (arg) => {
    this.setState({
      productsData: MockData(arg),
    })
  }


  setFilter = (arg) => {
    this.setState({
      dataFilter: arg
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          products={this.state.productsData}
          generateData = {this.generateData}
          setFilter = {this.setFilter}
          />
        </div>
    );
  }
}

export default App;
