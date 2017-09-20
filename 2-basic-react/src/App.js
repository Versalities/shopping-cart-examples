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
    if(arg){
    this.setState({
      productsData: MockData(arg),
    })
  }
  }

  prepareData = () => {
    return this.state.productsData.map( item =>
      Object.assign(item, item.taken = false)
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          products={this.prepareData()}
          generateData = {this.generateData}
          />
        </div>
    );
  }
}

export default App;
