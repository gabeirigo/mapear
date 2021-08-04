import React from 'react';
import './styles.scss';

function BecomeAnAnalyst() {
  return <section className="become-an-analyst">
    <div className="container">
      <div className="become-an-analyst__content-title">
        <h2 className="become-an-analyst__title title">
          Quem pode se tornar um Analista Comportamental?
        </h2>
      </div>

      <div className="become-an-analyst__content-personas">
        <article className="become-an-analyst__persona">
          <img src="" alt="" />
          <h2 className="become-an-analyst__persona-title">Profissioinais de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src="" alt="" />
          <h2 className="become-an-analyst__persona-title">Coaches</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src="" alt="" />
          <h2 className="become-an-analyst__persona-title">Consultores de RH</h2>
        </article>
        <article className="become-an-analyst__persona">
          <img src="" alt="" />
          <h2 className="become-an-analyst__persona-title">Interessados no desenvolvimento humano</h2>
        </article>
      </div>
    </div>
  </section>;
}

export default BecomeAnAnalyst;