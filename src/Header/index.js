import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">O que é a formação?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Benefícios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Depoimentos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQ</a>
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