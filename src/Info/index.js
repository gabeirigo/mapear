import React from 'react';
import './styles.scss';
import rhImage from '../assets/img/svg/rh.svg';
import profile from '../assets/img/svg/soraya.svg';

function Info() {
  return (
    <section className="info">
      <div className="container">
        <article className="info__row">
          <div>
            <h2 className="info__title title">Dê um grande passo na sua carreira profissional</h2>
            <p className="info__description">A Formação Analista Comportamental fornece ferramentas essenciais para atuar em diversas áreas de Recursos Humanos, como <span className="info__description-highlight">Recrutamento, Seleção, Desenvolvimento, Retenção de Talentos, Aumento de Produtividade, Formação de Liderança e mais. </span>Entre em contato para saber mais.</p>
          </div>
          <div>
            <img className="info__image" src={rhImage} alt="" />
          </div>
        </article>

        <article className="info__row">
          <div>
            <img className="info__image" src={profile} alt="" />
          </div>
          <div>
            <h2 className="info__title title">Conheça a ministrante</h2>
            <p className="info__description">Soraya Modesto é apaixonada por desenvolvimento humano.
              É Diretora Executiva da Mapear Perfil, franqueada pela Sólides para distribuição de soluções em gestão de pessoas com uso da ferramenta Perfil Profiler. Bacharel em Direito e MBA em Gestão Estratégica de Negócios, Consultora Organizacional, Especialista em Gestão Comportamental, Coach pelo Instituto Internacional de Ciências Comportamentais e de Gestão (INCTA), Master Training em análise de Mapeamento Comportamental.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Info;