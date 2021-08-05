import React from 'react';
import './style.scss';
import webPlatformCard from '../assets/img/svg/web-platform-card.svg';
import analisysReportCard from '../assets/img/svg/analysis-report-card.svg';
import certificateCard from '../assets/img/svg/certificate-card.svg';
import studyMaterialCard from '../assets/img/svg/study-material-card.svg';
import onlineSupportCard from '../assets/img/svg/online-support-card.svg';
import inCompanyCard from '../assets/img/svg/in-company-card.svg';
import timeCard from '../assets/img/svg/time-card.svg';
import onlineTrainingCard from '../assets/img/svg/online-training-card.svg';

function StudyMethod() {
    return (
        <section className="study-method">
            <div className="container">
                <div className="study-method__content-title">
                    <h2 className="study-method__content-title title">
                        Faça da crise um ponto de virada!
                    </h2>
                </div>
                <div className="study-method__info-paragraph">
                    <p className="study-method__info-paragraph-paragraph">Com a Formação Analista Comportamental, você garante uma ótima estrutura para iniciar seus atendimentos com qualidade e o melhor: sem sair de casa!</p>
                </div>

                <div className="study-method__content-cards">
                    <div className="study-method__card">
                        <img src={webPlatformCard}></img>
                        <p className="study-method__card-p">Acesso a plataforma web personalizada</p>
                    </div>

                    <div className="study-method__card">
                        <img src={analisysReportCard}></img>
                        <p className="study-method__card-p">4 relatórios de análise comportamental</p>
                    </div>

                    <div className="study-method__card">
                        <img src={certificateCard}></img>
                        <p className="study-method__card-p">Certificação internacional</p>
                    </div>

                    <div className="study-method__card">
                        <img src={studyMaterialCard}></img>
                        <p className="study-method__card-p">Material didático</p>
                    </div>

                    <div className="study-method__card">
                        <img src={onlineSupportCard}></img>
                        <p className="study-method__card-p">Suporte online</p>
                    </div>


                    <div className="study-method__card">
                        <img src={inCompanyCard}></img>
                        <p className="study-method__card-p">Possibilidade de formação InCompany</p>
                    </div>

                    <div className="study-method__card">
                        <img src={timeCard}></img>
                        <p className="study-method__card-p">12 horas de carga horária</p>
                    </div>
                    <div className="study-method__card">
                        <img src={onlineTrainingCard}></img>
                        <p className="study-method__card-p">Formação online e ao vivo</p>
                    </div>
                </div>

                <div className="become-an-analyst__button-contact-us">
                    <a href="#" className="btn">Fale com um de nossos consultores</a>
                </div>
            </div>

        </section>
    )
}

export default StudyMethod;