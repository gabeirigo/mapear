import React from 'react';
import './styles.scss';
import rhImage from '../assets/img/svg/rh.svg';
import profile from '../assets/img/svg/image-profile.svg';

function Info() {
  return (
    <div className="container">
      <section id="info" className="info">
        <article className="info__row">
          <div className="info__content">
            <div className="info__professional-career">
              <h2 className="info__title title">Dê um grande passo na sua carreira profissional</h2>
              <p className="info__description">Certificamos você no uso da ferramentas de Avaliação de Perfil Comportamental  para atuar de forma mais assertiva e segura em diversas áreas, Treinamento, Desenvolvimento,
                coaching, Recursos Humanos,  Recrutamento e Seleção,   Retenção de Talentos, Aumento de Produtividade, Formação de Liderança,  Gestão de Performance,  Gestão de Competências. <a href="">Entre em contato para saber mais sobre próxima turma. </a> </p>
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
              <h2 className="info__title title">Conheça a facilitadora</h2>
              <p className="info__description">Soraya Modesto é apaixonada por desenvolvimento humano.
                Diretora Executiva da Mapear Perfil, franqueada pela Sólides para distribuição de soluções em gestão de pessoas com uso da ferramenta Perfil Profiler.
                Desde 2013 atuando Master Training em análise comportamental,  mais de 900 devolutivas de perfil realizadas, 35 turmas de Analistas Comportamentais certificadas.
                Bacharel em Direito e MBA em Gestão Estratégica de Negócios, Consultora Organizacional, Especialista em Gestão Comportamental, Coach pelo Instituto Internacional de Ciências Comportamentais e de Gestão (INCTA).
                24 anos de experiência em Treinamento e  Desenvolvimento  de pessoas</p>
            </div>
          </div>

        </article>
      </section>
    </div>
  );
}

export default Info;