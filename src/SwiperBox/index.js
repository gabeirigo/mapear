import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.min.css"
import './style.scss'

SwiperCore.use([Navigation, Pagination]);

function SwiperBox() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation={true}
      className="swiper-box"
    >
      <SwiperSlide className="swiper-box__item">
        <article className="swiper-box__testimonial">
          <h3 className="swiper-box__author">Renata Martin - Supervisora | Fundação CDL</h3>
          <p className="swiper-box__testimonial-author">O Profiler é uma poderosa ferramenta que nos auxilia em vários aspectos para tomada de decisão. Utilizamos em Recrutamento e Seleção, nas Consultorias de Gestão, como plano de desenvolvimento de Líderes e demais colaboradores, dentre outros. Fiz a formação na primeira turma pela Mapear Perfil e sem dúvidas foi um divisor de águas, é realmente necessária a capacitação para dominar e compreender a ferramenta em sua totalidade. Renata Martin - Supervisora Fundação CDL.</p>
        </article>
      </SwiperSlide>

      <SwiperSlide className="swiper-box__item">
        <article className="swiper-box__testimonial">
          <h3 className="swiper-box__author" >Rangel Lima - Psicólogo e Master Coach Executivo e de Negócios</h3>
          <p className="swiper-box__testimonial-author">Comecei a trabalhar com a Mapear Perfil em 2017 porque a plataforma, os relatórios e o suporte é muito bom, além de ter um preço acessível o que permite reduzir custos e aumentar o faturamento. Os assessments trazem opções diferenciadas para dar devolutivas aos candidatos e aos contratantes, com uma assertividade superior a 95%. O sistema é muito simples e completo, atende minhas necessidades para trabalhos individuais e corporativos. Uso as ferramentas nos processos de psicoterapia, coaching, mentoria, seleção de pessoas e orientação de carreira. É uma ferramenta objetiva que nos auxilia muito no dia a dia. Recomendo para quer precisa profissionalizar sua atuação e agregar mais valor ao seu trabalho.</p>
        </article>
      </SwiperSlide>

      <SwiperSlide className="swiper-box__item">
        <article className="swiper-box__testimonial">
          <h3 className="swiper-box__author">Jaciara Morais - Gerente de RH | Grupo Zema</h3>
          <p className="swiper-box__testimonial-author">A ferramenta de perfil comportamental que a Mapear Perfil nos oferece tem sido primordial para o desenvolvimento das nossas lideranças. Oferecem informações detalhadas, objetivas e aplicáveis nos possibilitando tomar decisões sobre contratações e desenvolvimento pessoal e profissional. Já mapeamos mais de 600 colaboradores e estamos muito felizes com os resultados que a ferramenta nos traz.</p>
        </article>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default SwiperBox;