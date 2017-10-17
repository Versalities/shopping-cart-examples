import React, { Component } from 'react'
import './styles.css'

export default class Controls extends Component {
  constructor(){
    super();
    this.state = {
      inputData: null
    }
  }

  handleNumInput = (arg) => {
    this.setState({
      inputData: arg
    })
  }

  render(){
    return (
        <div className='controls'>
          <h2>Controls</h2>
          <h5>Generate Specific Amount of Data</h5>
          <input type='number'
            onChange={(e) => this.handleNumInput(e.target.value)}
            />
          <button
            onClick={()=>this.props.generateData(this.state.inputData)}
            >Generate</button>
          <h5>Filter Data By Category</h5>
          <input type='text'
            onChange={(e) => this.props.setFilter(e.target.value)}
            />
        </div>
    )
  }
}
