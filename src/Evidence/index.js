import React from 'react';
import './style.scss';
import './swiper.scss';
import evidencePersonaImage from '../assets/img/svg/big-girl.svg'

function Evidence() {
    return (
        <section className="evidence" id="evidence">
            <div className="container">
                <div className="evidence__content-title">
                    <h2 className="evidence__content-title title">
                        Invista no seu progresso
                    </h2>
                </div>

                <div className="evidence__info-paragraph">
                    <p className="evidence-paragraph-paragraph">A Formação Analista Comportamental possui anos de história, com diversos participantes e empresas renomadas atendidas
                    </p>
                </div>

                <div className="evidence__content-results">

                    <img className="evidence__persona-image" src={evidencePersonaImage} alt="Depoimentos" title="Depoimentos"></img>



                    <div className="evidence__container-results">

                        <div className="evidence__students-results-slide">
                            

                        </div>

                        <div className="evidence__students-results-videos">
                            <div className="evidence__video"></div>
                            <div className="evidence__video"></div>
                        </div>
                    </div>
                </div>

                <article className="evidence__achievements">
                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +120 </p>
                        <p className="evidence__achievements-info"> Clientes </p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number" > +200 </p>
                        <p className="evidence__achievements-info"> Analista Comportamentais Certificados</p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +7 </p>
                        <p className="evidence__achievements-info"> Anos de História </p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +600 </p>
                        <p className="evidence__achievements-info"> Participantes nos workshops </p>
                    </div>
                </article>

                <div className="evidence__button-contact-us">
                    <a href="google.com" className="btn">Inscreva-se já</a>
                </div>
            </div>
        </section>
    )
}

export default Evidence;