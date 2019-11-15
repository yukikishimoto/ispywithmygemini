import React from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import './App.scss';

class App extends React.Component {

  state ={
    zodiac: ''
  }

  
  handleSubmit = (event, history) => {
    const option1 = event.target.zodiac1.value;
    const option2 = event.target.zodiac2.value;
    event.preventDefault();
    axios.get('http://localhost:8080/horoscopes')
    .then(response =>{
      //callback(response.data.find(item => item[option1])[option1][option2]);
      console.log(response.data.find(item => item[option1])[option1][option2]);
      this.setState({
        zodiac: response.data.find(item => item[option1])[option1][option2]
      }, () => { 
        history.push('/result');
      });

    })
    .catch(error =>{
      alert('error')
    })
  }

  
  
  render() {
  console.log(this.state.zodiac)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render= { (routerProps)=> <Form { ...routerProps } handleSubmit={this.handleSubmit}/> } />
          <Route path="/result" render={() => <Result zodiac = {this.state.zodiac} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
