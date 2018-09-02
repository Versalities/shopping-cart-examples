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

  render() {
    const {generateData, setFilter} = this.props;

    return (
        <div className='controls'>
          <h2>Controls</h2>
          <h5>Generate Specific Amount of Data</h5>
          <input
            type='number'
            onChange={(e) => this.handleNumInput(e.target.value)}
          />
          <button
            onClick={() => generateData(this.state.inputData)}
          >
            Generate
          </button>
          <h5>Filter Data By Category</h5>
          <input
            type='text'
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
    )
  }
}
