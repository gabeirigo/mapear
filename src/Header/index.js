import React from 'react';
import './style.scss';
import mapearBrand from '../assets/img/svg/mapear-brand.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="header__navbar-brand" href="/">
              <img src={mapearBrand} alt="Logo"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#info">O que é a Formação?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#study-method">Benefícios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#evidence">Depoimentos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#frequently-asked-questions">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;