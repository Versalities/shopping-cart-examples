import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
  render(){
    return (
      <header>
      <img className='header-logo' width="5%" src="http://stonyvin.net/content/images/2017/02/reactjsicon.png" alt="" />
      <h1>Basic React</h1>
      <img className='header-logo' width="5%" src="http://stonyvin.net/content/images/2017/02/reactjsicon.png" alt="" />
      </header>
    )
  }
}
