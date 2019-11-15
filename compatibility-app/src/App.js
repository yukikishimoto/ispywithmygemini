import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
