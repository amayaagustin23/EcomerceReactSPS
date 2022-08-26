import React from 'react';
import {NavLink} from 'react-router-dom';
import Facebook from '../../assets/img/socials/facebook.png';
import Instagram from '../../assets/img/socials/instagram.png';
import Youtube from '../../assets/img/socials/youtube.png';
import Twitter from '../../assets/img/socials/twitter.png';
import Logo from '../../assets/img/icon/logo.png';
import Profile from '../../assets/img/icon/profile-user.png';
import Cart from '../../assets/img/icon/shopping-cart.png';
import './Navbar.css';

const Navbar = props => {
  return (
    <header>
      <div className="socialsContenedor">
        <div className="btn-menu">
          <label className="icon-menu" htmlFor="btn-menu"></label>
        </div>
        <NavLink data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" to="/" title="Home">
          <img src={Logo} alt="Logo" width="100" />
        </NavLink>
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="socials">
          <a target="_blank" href="https://www.facebook.com/search/top?q=style%20pics%20sports">
            <img src={Facebook} alt="facebook" width="32" />
          </a>
          <a target="_blank" href="https://www.instagram.com/stylepics.sports/">
            <img src={Instagram} alt="Instagram" width="32" />
          </a>
          <a target="_blank" href="https://twitter.com/home">
            <img src={Youtube} alt="Youtube" width="32" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <img src={Twitter} alt="Twitter" width="32" />
          </a>
        </div>
      </div>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/" title="Home">
              Home
            </NavLink>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/new" title="Noticias">
              Noticias
            </NavLink>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/shop" title="Camisetas">
              Tienda
            </NavLink>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/about" title="About">
              Quiénes Somos
            </NavLink>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/contact" title="Contacto">
              Contacto
            </NavLink>
            <NavLink className={isActive => 'navOp ' + (!isActive ? ' activeLink' : 'navOp')} to="/help" title="Ayuda">
              Ayuda
            </NavLink>
            <div className="socialsNav">
              <a target="_blank" href="https://www.facebook.com/search/top?q=style%20pics%20sports">
                <img src={Facebook} alt="facebook" width="32" />
              </a>
              <a target="_blank" href="https://www.instagram.com/stylepics.sports/">
                <img src={Instagram} alt="Instagram" width="32" />
              </a>
              <a target="_blank" href="https://twitter.com/home">
                <img src={Youtube} alt="Youtube" width="32" />
              </a>
              <a target="_blank" href="https://www.youtube.com/">
                <img src={Twitter} alt="Twitter" width="32" />
              </a>
            </div>
          </nav>
          <div className="icons">
            <a className="icon" to="./User.html">
              <img className="groupIcon" src={Profile} alt="user" />
            </a>
            <a className="icon" to="./shoppingCart.html">
              <img className="groupIcon" src={Cart} alt="cart" />
              <div id="cartcount">0</div>
            </a>
          </div>
          <label className="icon-cancel" htmlFor= "btn-menu"></label>
        </div>
      </div>
      <div className="iconsNav">
        <a className="icon" to="./User.html">
          <img className="groupIcon" src="../image/icon/profile-user.png" width="32" alt="user" />
        </a>
        <a className="icon" to="./shoppingCart.html">
          <img className="groupIcon" src="../image/icon/shopping-cart.png" alt="cart" />
          <div id="cartcountNav">0</div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
