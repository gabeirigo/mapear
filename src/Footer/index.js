import React from 'react';
import './styles.scss';
import instagramIcon from '../assets/img/svg/instagram-icon.svg';
import facebookIcon from '../assets/img/svg/facebook-icon.svg';
import linkedinIcon from '../assets/img/svg/linkedin-icon.svg';
import locationIcon from '../assets/img/svg/location-icon.svg';
import whatsappIcon from '../assets/img/svg/whatsapp-icon.svg';
import emailIcon from '../assets/img/svg/email-icon.svg';
import mapearBrand from '../assets/img/svg/mapear-brand.svg';




function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div>
            <a href="/" className="footer__logo">
              <img src={mapearBrand} alt="Logo Mapear"></img>
            </a>
          </div>

          <div className="footer__social-media">
            <a href="https://www.instagram.com/mapearperfiloficial/"> <img src={instagramIcon} alt="Instagram Ícone" title="Instagram"></img></a>
            <a href="https://www.linkedin.com/company/mapearperfiloficial/"><img src={linkedinIcon} alt="Linkedin Ícone" title="Linkedin"></img></a>
            <a href="https://www.facebook.com/mapearperfil"> <img src={facebookIcon} alt="Facebook Ícone" title="Facebook"></img></a>
          </div>

          <div className="footer__contact">
            <div className="footer__whatsapp-number">
              <img className="footer__icon" src={whatsappIcon} alt="Whatsapp Ícone" title="Whatsapp"></img>
              <p>(34) 98431-1111</p>
            </div>

            <div className="footer__email">
              <img className="footer__icon" src={emailIcon} alt="Email Ícone" title="Email"></img>
              <p>fale@mapearperfil.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;