import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './styles.scss'
import './accordionDemo.scss';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



function FrequentlyAskedQuestions() {

    return (
        <section className="frequently-asked-questions" id="frequently-asked-questions">
            <div className="container">
                <div className="frequently-asked-questions__content-title">
                    <h2 className="frequently-asked-questions__title title">
                        Dúvidas Frequentes
                    </h2>
                </div>
                <article className="frequently-asked-questions__content">
                    <div className="frequently-asked-questions__card">
                        <Accordion>
                            <AccordionTab header="Preciso de alguma graduação para fazer a Formação?">
                                <p>Independente da sua formação acadêmica, a Formação em Análise Comportamental é para quem deseja adquirir conhecimento em desenvolvimento humano ou iniciar uma nova atuação profissional e aumentar a sua renda.</p>
                            </AccordionTab>
                            <AccordionTab header="A Formação é online ou presencial?">
                                <p>Turmas online e presencial.</p>
                            </AccordionTab>
                            <AccordionTab header="Qual o valor da Formação?">
                                <p>Valor da Formação de R$ 1.297,00 por <mark>R$ 897,00</mark> (podendo parcelar no cartão)</p>
                            </AccordionTab>
                            <AccordionTab header="Quais os benefícios que ganho com a Formação?">
                                <p>Plataforma Web personalizada + 3 perfis e atualização do novo relatório Profiler.</p>
                            </AccordionTab>
                            <AccordionTab header="Já tenho certificação, posso refazer?">
                                <p>Sim, em 2021 a ferramenta foi atualizada, é importante saber interpretar o novo relatório e receber materiais atualizados para devolutivas dos perfis.</p>
                            </AccordionTab>
                            <AccordionTab header="Como funciona a aquisição dos perfis?">
                                <p>Temos planos especiais para quem faz a Formação na Mapear e condições diferenciadas para planos mensalistas e aquisição avulsa.</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </article>
    
                <div className="frequently-asked-questions__button-contact-us">
                    <a href="#form" className="btn btn-primary btn-lg">Inscrever</a>
                </div>
    
            </div>
    
    
        </section>
    )
}







export default FrequentlyAskedQuestions;