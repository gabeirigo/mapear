import React from 'react';
import './styles.scss';
import ufmgImage from '../assets/img/svg/ufmg.svg';
import finepImage from '../assets/img/svg/finep.svg';
import uspImage from '../assets/img/svg/usp.svg';
import fumsoftImage from '../assets/img/svg/fumsoft.svg';

function ReliableMethodology() {
    return (
        <section className="reliable-methodology">
            <div className="reliable-methodology__container">

                <div className="reliable-methodology__content-title">
                    <h2 className="reliable-methodology__title title">
                        Metodologia testada e chancelada
                    </h2>
                </div>

                <div className="reliable-methodology__info-paragraph">
                    <p className="reliable-methodology__paragraph-paragraph">O Profiler é um Sistema com 97,97% de assertividade comprovada para a Identificação de Perfil Profissional/Comportamental.</p>
                </div>

            <div className="reliable-methodology__content">
                <div className="reliable-methodology__supporting-companies">
                    <div className="reliable-methodology__companies">
                        <img src={ufmgImage} alt="UFMG" title="UFMG"></img>
                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={finepImage} alt="Finep" title="Finep"></img>
                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={uspImage} alt="USP" title="USP"></img>
                    </div>
                    <div className="reliable-methodology__companies">
                        <img src={fumsoftImage} alt="Fumsoft" title="Fumsoft"></img>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )


}

export default ReliableMethodology;