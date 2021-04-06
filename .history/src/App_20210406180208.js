import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
