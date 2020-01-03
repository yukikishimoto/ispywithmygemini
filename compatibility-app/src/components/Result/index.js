import React from 'react';
import './styles.scss';

function Result(props) {
  return (
    <section className="result">
      <div className="result__container">
        <h1 className="result__title">Are you compatible?</h1>
        <p className="result__description">{props.zodiac}</p>
      </div>
    </section>
  );
}

export default Result;