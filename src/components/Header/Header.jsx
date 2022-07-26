import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
      <div className="container">
        <Link to='/'>
          <img className='header__image' src={require('../../images/logo.png')} alt="schro-dinger" />
        </Link>
        <a className='header__link' href="#connect">Connect Wallet</a>
      </div>
    </header>
  )
}

export default Header