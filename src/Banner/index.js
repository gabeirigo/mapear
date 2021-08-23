import React from 'react';
import './style.scss'

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container container">
      <div className="banner__description-content">
        <h2 className="banner__title">
          Formação
          <span className="banner__title-bold">Analista Comportamental</span>
        </h2>
        <p className="banner__text-description">Faça parte do RH do fututro!</p>
        <a href="#form" className="btn btn-primary btn-lg">Cadastre-se</a>
      </div>
      </div>
    </section>
  );
}

export default Banner;