import React from 'react';
import './style.scss';
import bigGirl from  '../assets/img/svg/big-girl.svg'

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

                <div className="evidence__slide-results">
                    <img src={bigGirl}></img>
                    <div className="evidence__results">
                        <div className="evidence__results-card">

                        </div>
                        <div className="evidence__results-videos"></div>
                        <div className="evidence__results-videos"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Evidence;