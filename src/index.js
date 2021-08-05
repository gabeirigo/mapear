import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner'
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.min.js';
import SubscribeForm from './SubscribeForm';
import Info from './Info';
import BecomeAnAnalyst from './BecomeAnAnalyst';
import StudyMethod from './StudyMethod';
import Evidence from './Evidence';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <SubscribeForm></SubscribeForm>
    <Info></Info>
    <BecomeAnAnalyst></BecomeAnAnalyst>
     <StudyMethod></StudyMethod>
     <Evidence></Evidence>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
