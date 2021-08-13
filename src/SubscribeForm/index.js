import React, { useEffect } from 'react';
import './style.scss'
import { useForm } from "react-hook-form";
import emailjs, { init } from 'emailjs-com';

function SubscribeForm() {

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, [])

  async function sendMail(data) {
    console.log(data);
    let form = {};

    form.innerHTML = (<div>
      <p>Nome: {data.nome}</p>
      <p>Email: {data.email}</p>
      <p>Whatsapp: {data.whatsapp}</p>
      <p>Ocupação: {data.ocupacao}</p>
    </div>);

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  return <section className="subscribe-form">
    <form onSubmit={handleSubmit(sendMail)} className="container subscribe-form__container">
      <div className="subscribe-form__row">
        <div className="subscribe-form__field">
          <input {...register('nome')} type="text" className="subscribe-form__input form-control" placeholder="Nome" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="subscribe-form__field">
          <input  {...register('eamil')} type="email" className="subscribe-form__input form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>

      <div className="subscribe-form__row">
        <div className="subscribe-form__field">
          <input  {...register('whatsapp')} type="text" className="subscribe-form__input form-control" placeholder="Whatsapp" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="subscribe-form__field">
          <input  {...register('ocupacao')} type="text" className="subscribe-form__input form-control" placeholder="Ocupação" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>

      <div className="subscribe-form__row">
        <div className="subscribe-form__field subscribe-form__field--control ">
          <span className="subscribe-form__lgpd-description">
            * Todos os seus dados serão usados de acordo com as normas da Lei Geral de Proteção de Dados
          </span>
        </div>

        <div className="subscribe-form__field subscribe-form__field--button">
          <button type="submit" className="btn btn-primary btn-lg">Inscrever!</button>
        </div>
      </div>

    </form>
  </section>;
}

export default SubscribeForm;