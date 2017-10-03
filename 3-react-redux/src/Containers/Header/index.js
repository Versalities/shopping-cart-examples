import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
  render(){
    return (
      <header>
      <img  width="5%" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
      <h1>React + Redux</h1>
      <img  width="4%" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt="" />
      </header>
    )
  }
}
