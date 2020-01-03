import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import './App.scss';

class App extends React.Component {
  state = {
    zodiac: ''
  }

  submitHandler = (event, history) => {
    event.preventDefault();

    const option1 = event.target.zodiac1.value;
    const option2 = event.target.zodiac2.value;

    if (!option1 || !option2) {
      alert("Please select both zodiac signs.");
      return;
    }

    axios
    .get("http://localhost:8080/horoscopes")
    .then((response) => {
      this.setState({
        zodiac: response.data.find(item => item[option1])[option1][option2]
      }, () => { 
        history.push("/result");
      });
    })
    .catch(() => {
      alert("There was an error in the request for compatibility data from the server.");
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact render= {(routerProps) => <Form {...routerProps} submitHandler={this.submitHandler}/>} />
            <Route path="/result" render={() => <Result zodiac={this.state.zodiac} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;