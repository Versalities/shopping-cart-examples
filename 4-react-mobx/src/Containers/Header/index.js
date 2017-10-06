import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
  render(){
    return (
      <header>
      <img className='header-logo' width="5%" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
      <h1>React + MobX</h1>
      <img className='header-logo' width="5%" src="https://avatars3.githubusercontent.com/u/17475736?v=4&s=400" alt="" />
      </header>
    )
  }
}
