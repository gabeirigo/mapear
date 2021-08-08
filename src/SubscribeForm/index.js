import React from 'react';
import './style.scss'

function SubscribeForm() {
  return <section className="subscribe-form">
    <div className="container subscribe-form__container">
      <div className="subscribe-form__row">
        <div className="subscribe-form__field">
          <input type="email" class="subscribe-form__input form-control" placeholder="Nome" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="subscribe-form__field">
          <input type="email" class="subscribe-form__input form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>

      <div className="subscribe-form__row">
        <div className="subscribe-form__field">
          <input type="email" class="subscribe-form__input form-control" placeholder="Whatsapp" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="subscribe-form__field">
          <input type="email" class="subscribe-form__input form-control" placeholder="Ocupação" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

    </div>
  </section>;
}

export default SubscribeForm;