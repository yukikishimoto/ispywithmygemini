import React from 'react';
import {Link} from 'react-router-dom';
import aries1 from '../../assets/images/icons8-aries-100.png';
import taurus1 from '../../assets/images/icons8-taurus-100.png';
import gemini1 from '../../assets/images/icons8-gemini-100.png';
import cancer1 from '../../assets/images/icons8-cancer-100.png';
import leo1 from '../../assets/images/icons8-leo-100.png';
import virgo1 from '../../assets/images/icons8-virgo-100.png';
import libra1 from '../../assets/images/icons8-libra-100.png';
import scorpio1 from '../../assets/images/icons8-scorpio-100.png';
import sagittarius1 from '../../assets/images/icons8-sagittarius-100.png';
import capricorn1 from '../../assets/images/icons8-capricorn-100.png';
import aquarius1 from '../../assets/images/icons8-aquarius-100.png';
import pisces1 from '../../assets/images/icons8-pisces-100.png';
import aries2 from '../../assets/images/icons8-aries-100-2.png';
import taurus2 from '../../assets/images/icons8-taurus-100-2.png';
import gemini2 from '../../assets/images/icons8-gemini-100-2.png';
import cancer2 from '../../assets/images/icons8-cancer-100-2.png';
import leo2 from '../../assets/images/icons8-leo-100-2.png';
import virgo2 from '../../assets/images/icons8-virgo-100-2.png';
import libra2 from '../../assets/images/icons8-libra-100-2.png';
import scorpio2 from '../../assets/images/icons8-scorpio-100-2.png';
import sagittarius2 from '../../assets/images/icons8-sagittarius-100-2.png';
import capricorn2 from '../../assets/images/icons8-capricorn-100-2.png';
import aquarius2 from '../../assets/images/icons8-aquarius-100-2.png';
import pisces2 from '../../assets/images/icons8-pisces-100-2.png';
import './styles.scss';

class Form extends React.Component {

  zodiacSigns1 = [
    {
      name: "aries1",
      image: aries1
    },
    {
      name: "taurus1",
      image: taurus1
    },
    {
      name: "gemini1",
      image: gemini1
    },
    {
      name: "cancer1",
      image: cancer1
    },
    {
      name: "leo1",
      image: leo1
    },
    {
      name: "virgo1",
      image: virgo1
    },
    {
      name: "libra1",
      image: libra1
    },
    {
      name: "scorpio1",
      image: scorpio1
    },
    {
      name: "sagittarius1",
      image: sagittarius1
    },
    {
      name: "capricorn1",
      image: capricorn1
    },
    {
      name: "aquarius1",
      image: aquarius1
    },
    {
      name: "pisces1",
      image: pisces1
    },
  ];

  zodiacSigns2 = [
    {
      name: "aries2",
      image: aries2
    },
    {
      name: "taurus2",
      image: taurus2
    },
    {
      name: "gemini2",
      image: gemini2
    },
    {
      name: "cancer2",
      image: cancer2
    },
    {
      name: "leo2",
      image: leo2
    },
    {
      name: "virgo2",
      image: virgo2
    },
    {
      name: "libra2",
      image: libra2
    },
    {
      name: "scorpio2",
      image: scorpio2
    },
    {
      name: "sagittarius2",
      image: sagittarius2
    },
    {
      name: "capricorn2",
      image: capricorn2
    },
    {
      name: "aquarius2",
      image: aquarius2
    },
    {
      name: "pisces2",
      image: pisces2
    },
  ];

  submitHandler = (event) => {
    console.log(this.props);
    this.props.handleSubmit(event, this.props.history)
  }

  render() {
    
    return (
      <section className="form">
        <div className="form__hearts">
          <div className="form__heart"></div>
          <div className="form__heart"></div>
          <div className="form__heart"></div>
          <div className="form__heart"></div>
          <div className="form__heart"></div>
        </div>
        <h1 className="form__title">Pick two zodiac signs.</h1>
        <h2 className="form__subtitle">We'll tell you how compatible they are.</h2>
        <form className="form__form" id="compatibility" onSubmit={(event) => { this.submitHandler(event) }} >
          <div className="form__selection-container form--pink-background">
            <h3 className="form__selection-title">Select your zodiac sign:</h3>
            <div className="form__selection">
              {this.zodiacSigns1.map(zodiacSign => {
                return (
                  <React.Fragment key={zodiacSign.name}>
                    <input className="form__input" type="radio" name="zodiac1" id={zodiacSign.name} value={zodiacSign.name.slice(0, -1)} />
                    <label className="form__label" htmlFor={zodiacSign.name}>
                      <img className="form__image form__image-1" src={zodiacSign.image} alt={`${zodiacSign.name} zodiac`} />
                      <span className="form__name">{zodiacSign.name.slice(0, -1)}</span>
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="form__selection-container">
            <h3 className="form__selection-title">Select their zodiac sign:</h3>
            <div className="form__selection">
              {this.zodiacSigns2.map(zodiacSign => {
                return (
                  <React.Fragment key={zodiacSign.name}>
                    <input className="form__input" type="radio" name="zodiac2" id={zodiacSign.name} value={zodiacSign.name.slice(0, -1)}/>
                    <label className="form__label" htmlFor={zodiacSign.name}>
                      <img className="form__image form__image-2" src={zodiacSign.image} alt={`${zodiacSign.name} zodiac`} />
                      <span className="form__name">{zodiacSign.name.slice(0, -1)}</span>
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="form__button-container">
            <button className="form__button" type="submit" form="compatibility">&gt;&gt; Check compatibility! &lt;&lt;</button>

          </div>
        </form>
      </section>
      
    );
  }
}

export default Form;

