import React from 'react';
import './styles.scss';
import arrowQuestions from '../assets/img/svg/arrow-questions.svg';

function FrequentlyAskedQuestions() {
    return (
        <section className="frequently-asked-questions">
            <div className="frequently-asked-questions__content-title">
                <h2 className="frequently-asked-questions__title title">
                    Dúvidas Frequentes
                </h2>
            </div>

            <article className="frequently-asked-questions__content">
                <div className="frequently-asked-questions__question">
                    <p>Preciso de alguma graduação para fazer a Formação?</p>
                    <div>
                        <img src={arrowQuestions}></img>
                    </div>
                </div>
                <div className="frequently-asked-questions__question">
                    <p>A Formação é online ou presencial?</p>
                    <div>
                        <img src={arrowQuestions}></img>
                    </div>
                </div>
                <div className="frequently-asked-questions__question">
                    <p>Qual o valor da Formação?</p>
                    <div>
                        <img src={arrowQuestions}></img>
                    </div>
                </div>
            </article>

            <div className="frequently-asked-questions__button-contact-us">
                    <a href="#" className="btn">Inscrever</a>
                </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;