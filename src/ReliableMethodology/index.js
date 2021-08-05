import React from 'react';
import './styles.scss';
import ufmgImage from '../assets/img/svg/ufmg.svg';
import finepImage from '../assets/img/svg/finep.svg';
import uspImage from '../assets/img/svg/usp.svg';
import fumsoftImage from '../assets/img/svg/fumsoft.svg';

function ReliableMethodology() {
    return (
        <section className="reliable-methodology">
            <div className="container">

                <div className="reliable-methodology__content-title">
                    <h2 className="reliable-methodology__title title">
                        Metodologia testada e chancelada
                    </h2>
                </div>

                <div className="reliable-methodology__info-paragraph">
                    <p className="evidence-paragraph-paragraph">O Profiler é um Sistema com 97,97% de assertividade comprovada para a Identificação de Perfil Profissional/Comportamental.</p>
                </div>
            </div>

            <div className="reliable-methodology__content">
                <div className="reliable-methodology__supporting-companies">
                    <div className="reliable-methodology__companies">
                        <img src={ufmgImage}></img>
                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={finepImage}></img>
                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={uspImage}></img>

                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={fumsoftImage}></img>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default ReliableMethodology;