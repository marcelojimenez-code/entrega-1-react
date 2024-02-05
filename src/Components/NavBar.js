import React, { useState } from 'react';
import Logo from "../img/logo.png";
import CartWidget from './CartWidget';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const links = [
    {
        id: 1,
        link: 'Inicio',
        url: 'inicio'
    },
    {
        id: 2,
        link: 'Servicios',
        url: 'servicio'
    },
    {
        id: 3,
        link: 'Productos',
        url: 'productos'
    },
    {
        id: 4,
        link: 'Contacto',
        url: 'contacto'
    }

  ] 


  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a class="navbar-item">
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
                <a className="navbar-item" href={x.url}>{x.link}</a>
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
