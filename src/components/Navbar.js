import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

export default class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = (e) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <ul
              className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
            >
              <li>
                <Link to='/'>
                  <img src={logo} />
                </Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/rooms'>Rooms</Link>
              </li>
            </ul>
            <button type='button' className='nav-btn'>
              <FaAlignRight className='nav-icon' onClick={this.handleToggle} />
            </button>
          </div>
        </div>
      </nav>
    )
  }
}
