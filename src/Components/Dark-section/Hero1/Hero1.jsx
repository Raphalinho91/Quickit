import React from 'react'
import './Hero1.css'
import Logo from '../../../assets/Logo.png'
import Language from '../../../assets/language.png'
import Menu from '../../../assets/Menu.png'
import { Container } from 'react-bootstrap'

const Hero1 = () => {
  return (
    <header className='header'>
      <Container>
        <div className="navigation">
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <span className="mobile__menu"><img src={Menu} alt="" /></span>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#/">Why Quickit</a></li>
            <li className="nav__item"><a href="#/">Solutions</a></li>
            <li className="nav__item"><a href="#/">Ressources</a></li>
            <li className="nav__item"><a href="#/">Pricing</a></li>
            <li className="nav__item"><a href="#/">Contacts</a></li>
          </ul>
        </div>

        <div className="nav__right">
          <div className='Langage'><img src={Language} alt="" /></div>
          <div className="divider"></div>
          <button className='btn0'>Log In</button>
          <button className='btn1'>Request a Demo</button>
        </div>
        </div>
      </Container>
    </header>
  )
}

export default Hero1