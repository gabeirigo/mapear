import React from 'react';
import './style.scss';
import bigGirl from '../assets/img/svg/big-girl.svg'
import user from '../assets/img/svg/user.svg';
import arrow from "../assets/img/svg/arrow.svg";

function Evidence() {
    return (
        <section className="evidence">
            <div class="container">
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
                    <div className="evidence__big-girl-image">
                        <img src={bigGirl} ></img>
                    </div>
                    <div className="evidence__container">

                        <div className="evidence__students-results-slide">

                            <img className="evidence__arrow-previous" src={arrow}></img>

                            <div className="evidence__user">
                                <img src={user}></img>
                            </div>
                            <div className="evidence__user-coment">
                                <h2>Jaciara Morais - Gerente de RH | Grupo Zema</h2>
                                <p>A ferramenta de perfil comportamental que a Mapear Perfil nos oferece tem sido primordial para o desenvolvimento das nossas lideranças. Oferecem informações detalhadas, objetivas e aplicáveis nos possibilitando tomar decisões sobre contratações e desenvolvimento pessoal e profissional. Já mapeamos mais de 600 colaboradores e estamos muito felizes com os resultados que a ferramenta nos traz.</p>
                            </div>

                            <img className="evidence__arrow-next" src={arrow}></img>

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
                    <a href="#" className="btn">Inscreva-se já</a>
                </div>





            </div>
        </section>
    )
}

export default Evidence;