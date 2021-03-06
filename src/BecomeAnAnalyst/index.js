import React from 'react';
import './styles.scss';
import rhProfessionals from '../assets/img/svg/rh-professionals.svg';
import coaches from '../assets/img/svg/coaches.svg';
import rhConsultants from '../assets/img/svg/rh-consultants.svg';
import humanDevelopment from '../assets/img/svg/human-development.svg';


function BecomeAnAnalyst() {
  return <section className="become-an-analyst">
    <div className="container">
      <div className="become-an-analyst__content-title">
        <h2 className="become-an-analyst__title title">
          Quem pode se tornar um Analista Comportamental?
        </h2>
      </div>
      <div className="become-an-analyst__info">
        <p>A Formação em Análise Comportamental é para quem deseja adquirir conhecimento em desenvolvimento humano ou iniciar uma nova atuação profissional e aumentar a sua renda.</p>
      </div>

      <div className="become-an-analyst__content-personas">
        <article className="become-an-analyst__persona">
          <img src={rhProfessionals} alt="Profissionais de RH" title="Profissionais de RH" />
          <h2 className="become-an-analyst__persona-title">Profissionais de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={coaches} alt="Coaches" title="Coaches" />
          <h2 className="become-an-analyst__persona-title">Coaches</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={rhConsultants} alt="Consultores de RH" title="Consultores de RH" />
          <h2 className="become-an-analyst__persona-title">Consultores de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={humanDevelopment} alt="Interessados no desenvolvimento humano" title="Interessados no desenvolvimento humano" />
          <h2 className="become-an-analyst__persona-title">Interessados no desenvolvimento humano</h2>
        </article>
      </div>
      <div className="become-an-analyst__button-contact-us">
        <a href="https://api.whatsapp.com/send?phone=5534984311111" target="_blank" className="btn btn-primary btn-lg" rel="noreferrer">Fale com um de nossos consultores</a>
      </div>

    </div>
  </section>;
}

export default BecomeAnAnalyst;