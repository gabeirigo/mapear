import React, { useState } from 'react';
import './style.scss'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function SubscribeForm() {

  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [messageSuccessVisible, setMessageSuccessVisible] = useState(false);
  const [messageErrorVisible, setMessageErrorVisible] = useState(false);

  function sendMail(data) {
    setLoading(true);
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(res => {
      setMessageSuccessVisible(true);
      setTimeout(() => {
        setMessageSuccessVisible(false);
      }, 10000)
      setLoading(false);
    }).catch(err => {
      setMessageErrorVisible(true);
      setTimeout(() => {
        setMessageErrorVisible(false);
      }, 10000)
      setLoading(false);
    });
  }

  return (

    <section className="subscribe-form" id="form">
      <div className="container">

        <form onSubmit={handleSubmit(sendMail)} className="container subscribe-form__container">
        {
          messageSuccessVisible
            ? (
              <div class="alert alert-success" role="alert">
                Seu email foi enviado com sucesso! Aguarde nosso contato.
              </div>
            ) : null
        }

        {
          messageErrorVisible
            ? (
              <div class="alert alert-danger" role="alert">
                Ops... Algo deu errado e não conseguimos enviar seu email. Por favor, tente novamente mais tarde.
              </div>
            ) : null
        }
          <div className="subscribe-form__row">
            <div className="subscribe-form__field">
              <input {...register('nome')} type="text" className="subscribe-form__input form-control" placeholder="Nome" />
            </div>

            <div className="subscribe-form__field">
              <input  {...register('email')} type="email" className="subscribe-form__input form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>

          <div className="subscribe-form__row">
            <div className="subscribe-form__field">
              <input  {...register('whatsapp')} type="text" className="subscribe-form__input form-control" placeholder="Whatsapp" />
            </div>

            <div className="subscribe-form__field">
              <input  {...register('ocupacao')} type="text" className="subscribe-form__input form-control" placeholder="Ocupação" />
            </div>
          </div>

          <div className="subscribe-form__row">
            <div className="subscribe-form__field subscribe-form__field--control ">
              <span className="subscribe-form__lgpd-description">
                * Todos os seus dados serão usados de acordo com as normas da Lei Geral de Proteção de Dados
              </span>
            </div>

            <div className="subscribe-form__field subscribe-form__field--button">
              <button type="submit" className="btn btn-primary btn-lg">
                {
                  loading ? <i className="icofont-spinner icofont-spin loading"></i> : null
                }
                Enviar meu contato!
              </button>
            </div>
          </div>

        </form>
      </div>
    </section>



  );
}

export default SubscribeForm;