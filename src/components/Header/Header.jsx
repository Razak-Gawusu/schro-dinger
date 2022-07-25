import React from 'react'

function Header() {
  return (
    <header id='header'>
      <div className="container">
        <img className='header__image' src={require('../../images/logo.png')} alt="schro-dinger" />
        <a className='header__link' href="#connect">Connect Wallet</a>
      </div>
    </header>
  )
}

export default Header