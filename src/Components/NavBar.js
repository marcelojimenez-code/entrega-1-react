import React, { useState } from 'react';
import Logo from "../img/logo.png";
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const links = [
    {
        id: 1,
        link: 'Home',
        url: 'Home'
    },
    {
        id: 2,
        link: 'Galeria',
        url: 'Galeria'
    },
    {
        id: 3,
        link: 'Productos',
        url: 'Productos'
    },
    {
        id: 4,
        link: 'Contacto',
        url: 'Contacto'
    }

  ] 


  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
        <img src={Logo} alt="logo"/>       
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >

          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
            { links.map(x => 
                <Link className="navbar-item" to={x.url}>{x.link}</Link>               
            )}  
        </div>
        <div className='navbar-end'>
            <CartWidget />
        </div>
      </div>

    </nav>
  );
}

export default NavBar
