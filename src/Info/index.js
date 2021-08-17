import React from 'react';
import './styles.scss';
import rhImage from '../assets/img/svg/rh.svg';
import profile from '../assets/img/svg/image-profile.svg';

function Info() {
  return (
    <section id="info" className="info">
      <div className="container">
        <article className="info__row">
          <div className="info__content">
            <div>
              <h2 className="info__title title">Dê um grande passo na sua carreira profissional</h2>
              <p className="info__description">A Formação Analista Comportamental fornece ferramentas essenciais para atuar em diversas áreas de Recursos Humanos, como <span className="info__description-highlight">Recrutamento, Seleção, Desenvolvimento, Retenção de Talentos, Aumento de Produtividade, Formação de Liderança e mais. </span>Entre em contato para saber mais.</p>
            </div>
            <div className="info__images-rhImage">
              <img className="info__image" src={rhImage} alt="Formação Analista Comportamental" title="Formação Analista Comportamental" />
            </div>
          </div>

        </article>

        <article className="info__row">
          <div className="info__content">
            <div className="info__profile">
              <img className="info__image-profile" src={profile} alt="Foto Soraya Modesto" title="Soraya Modesto" />
            </div>
            <div>
              <h2 className="info__title title">Conheça a ministrante</h2>
              <p className="info__description">Soraya Modesto é apaixonada por desenvolvimento humano.
                É Diretora Executiva da Mapear Perfil, franqueada pela Sólides para distribuição de soluções em gestão de pessoas com uso da ferramenta Perfil Profiler. Bacharel em Direito e MBA em Gestão Estratégica de Negócios, Consultora Organizacional, Especialista em Gestão Comportamental, Coach pelo Instituto Internacional de Ciências Comportamentais e de Gestão (INCTA), Master Training em análise de Mapeamento Comportamental.</p>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}

export default Info;