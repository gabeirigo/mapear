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

      <div className="become-an-analyst__content-personas">
        <article className="become-an-analyst__persona">
          <img src={rhProfessionals} alt="" />
          <h2 className="become-an-analyst__persona-title">Profissionais de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={coaches} alt="" />
          <h2 className="become-an-analyst__persona-title">Coaches</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={rhConsultants} alt="" />
          <h2 className="become-an-analyst__persona-title">Consultores de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src={humanDevelopment} alt="" />
          <h2 className="become-an-analyst__persona-title">Interessados no desenvolvimento humano</h2>
        </article>
      </div>
      <div className="become-an-analyst__info">
        <p>Em resumo, a Formação em Análise Comportamental é para quem deseja adquirir conhecimento em desenvolvimento humano ou iniciar uma nova atuação profissional e aumentar a sua renda.</p>
      </div>
      <div className="become-an-analyst__button-contact-us">
      <a href="#" className="btn">Fale com um de nossos consultores</a>
      </div>

    </div>
  </section>;
}

export default BecomeAnAnalyst;