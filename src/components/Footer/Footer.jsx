import React from 'react'
import {Link} from 'react-router-dom';
import Facebook from "../../assets/img/socials/facebook.png"
import Instagram from "../../assets/img/socials/instagram.png"
import Youtube from "../../assets/img/socials/youtube.png"
import Twitter from "../../assets/img/socials/twitter.png"
import Logo from "../../assets/img/icon/logo.png"
import Profile from "../../assets/img/icon/profile-user.png"
import Cart from "../../assets/img/icon/shopping-cart.png"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
    <div className="contenedor" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
      <div className="logoFooter">
        <a href="../index.html" title="Home"><img src={Logo} alt="Logo" width="100" /></a>
      </div>
      <div className="categorias">
        <h2>Legal</h2>
        <div className="redirecCat">
          <Link className="footerOp" to="/">Inicio</Link>
          <Link className="footerOp" to="/contact">Contactanos</Link>
          <Link className="footerOp" to="/about" title="About">Quiénes Somos</Link>
        </div>
      </div>
      <div className="socials">
        <a target="_blank" href="https://www.facebook.com/search/top?q=style%20pics%20sports"><img src={Facebook} alt="facebook" width="32" /></a>
        <a target="_blank" href="https://www.instagram.com/stylepics.sports/"><img src={Instagram} alt="instagram" width="32" /></a>
        <a target="_blank" href="https://twitter.com/home"><img src={Twitter} alt="twitter" width="32" /></a>
        <a target="_blank" href="https://www.youtube.com/"><img src={Youtube} alt="youtube" width="32" /></a>
      </div>
    </div>
    <div className="copy">
      <p>&copy; Copyright © 2022 — SPS.</p>
    </div>
  </footer>
  )
}

export default Footer