
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import './styles.scss';

SwiperCore.use([Navigation, Pagination]);




function Slide() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation

      >
        <SwiperSlide><h2>Jaciara Morais - Gerente de RH | Grupo Zema</h2>
          <p>A ferramenta de perfil comportamental que a Mapear Perfil nos oferece tem sido primordial para o desenvolvimento das nossas lideranças. Oferecem informações detalhadas, objetivas e aplicáveis nos possibilitando tomar decisões sobre contratações e desenvolvimento pessoal e profissional. Já mapeamos mais de 600 colaboradores e estamos muito felizes com os resultados que a ferramenta nos traz.</p></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>


      </Swiper>
    </div>
  )

}








export default Slide;