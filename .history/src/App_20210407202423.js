import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/classes">
            <Classes/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
