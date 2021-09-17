import React from 'react';
import './style.scss';
import evidencePersonaImage from '../assets/img/svg/persona-image.svg'
import SwiperBox from '../SwiperBox';


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
                            <SwiperBox></SwiperBox>
                        </div>

                        <div className="evidence__students-results-videos">
                            <div className="evidence__video">
                                <iframe src="https://www.youtube.com/embed/hTRx12pq6yk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="evidence__video">
                            <iframe src="https://www.youtube.com/embed/v72Lftbw_X4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

               
                
               

                

                <article className="evidence__achievements">
                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +160 </p>
                        <p className="evidence__achievements-info"> Clientes </p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +380 </p>
                        <p className="evidence__achievements-info"> Analista Comportamentais Certificados</p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +8 </p>
                        <p className="evidence__achievements-info"> Anos de História </p>
                    </div>

                    <div className="evidence__achievements-data">
                        <p className="evidence__achievements-number"> +1200 </p>
                        <p className="evidence__achievements-info"> Participantes nos workshops </p>
                    </div>
                </article>

                <div className="evidence__button-contact-us">
                    <a href="#form" className="btn btn-primary btn-lg">Inscrever</a>
                </div>
            </div>
        </section>
    )
}

export default Evidence;