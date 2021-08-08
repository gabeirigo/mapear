import React from 'react';
import './styles.scss';
import instagramIcon from '../assets/img/svg/instagram-icon.svg';
import facebookIcon from '../assets/img/svg/facebook-icon.svg';
import linkedinIcon from '../assets/img/svg/linkedin-icon.svg';
import locationIcon from  '../assets/img/svg/location-icon.svg';
import whatsappIcon from  '../assets/img/svg/whatsapp-icon.svg';
import emailIcon from  '../assets/img/svg/email-icon.svg';




function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <a href="#" className="footer__logo">mapear</a>
          </div>

          <div className="footer__social-media">
            <a href="#"> <img src={instagramIcon} alt="Instagram Ícone" title="Instagram"></img></a>
            <a href="#"><img src={linkedinIcon} alt="Linkedin Ícone" title="Linkedin"></img></a>
            <a href="#"> <img src={facebookIcon} alt="Facebook Ícone" title="Facebook"></img></a>
          </div>

          <div className="footer__contact">
            <div className="footer__address">
              <a href="#">
                <img src={locationIcon} alt="Localização Ícone" title="Localização"></img>
              </a>
              <p>Av. Afonso Pena, 4465 – Umuarama
                Uberlândia – MG, CEP: 38405-309</p>
            </div>

            <div className="footer__whatsapp-number">
              <a href="#">
                <img src={whatsappIcon} alt="Whatsapp Ícone" title="Whatsapp"></img>
              </a>
              <p>(34) 98431-1111</p>
            </div>

            <div className="footer__email">
              <a href="#">
                <img src={emailIcon} alt="Email Ícone" title="Email"></img>
              </a>
              <p>fale@mapearperfil.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;