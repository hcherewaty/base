import React, { Component } from 'react';
import { Link } from "gatsby";

import '../components/design/navHead.scss';

export class Nav extends Component {
  render() {
    return (
      <div className='nav-link-container'>
        <Link className='navLink' to="/products">SHOP</Link>
        <Link className='navLink' to="/about">ABOUT</Link>
        <Link className='navLink' to="/lookbook">LOOKBOOK</Link>
        {/* <Link className='navLink' to="/contact">CONTACT</Link> */}
      </div>
    )
  }
}

export default Nav
