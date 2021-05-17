import React from 'react'
import { Link } from 'react-router-dom'
import imagem from '../assets/img/provinalogo.png'
import '../assets/css/components/header.css'

const Header = () => { 
  return(
    <header className="header container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icon">
        </span>
      </div>
      <div className="header-container">
        <Link to="/" className="flex flex--center">
        <img className="cabecalho__logo" src={imagem} alt="Logo Doguito"/>
        </Link>
      </div>

      <nav className="menu-header">
        <ul className="menu-itens">
          <li><Link to="/sendfile" className="menu-item menu-item--green"><h3>Enviar Arquivo</h3></Link></li>
          <li><Link to="/login" className="menu-item menu-item--purple"><h3>Entrar</h3></Link></li>
        </ul>

      </nav>
      <div className="menu-header-background"></div>
    </header>
  )
}


export default Header