import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css'



class Header extends Component {
    static propTypes ={
      title: PropTypes.string.isRequired
    };
    render() {
      return (
        <div className="Header">
        <h1>StoresFilter</h1>
  
        </div>
      );
    }
  }
  

  export default Header;

