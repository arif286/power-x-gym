import React from 'react';
import { Route, Router, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
