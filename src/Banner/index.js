import React from 'react';
import './style.scss'

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container container">
      <div className="banner__description-content">
        <h2 className="banner__title">
          Formação Online
          <span className="banner__title-bold">Analista Comportamental</span>
        </h2>
        <p className="banner__text-description">Se torne uma analista de perfil Comportamental através da ferramental Disc Profiler e amplie seus conhecimentos e resultados em gestão de pessoas.</p>
        <a href="#form" className="btn btn-primary btn-lg">Cadastre-se</a>
      </div>
      </div>
    </section>
  );
}

export default Banner;