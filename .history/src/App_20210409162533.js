import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import PricingPlan from "./components/PricingPlan/PricingPlan";
import PurchaseForm from "./components/PurchaseForm/PurchaseForm";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/classes">
            <Classes/>
          </Route>
          <Route path='/class/details/:id'>
            <ClassDetails/>
          </Route>
          <Route path='/pricing'>
            <PricingPlan/>
          </Route>
          <Route path='/checkOut'>
            <PurchaseForm/>
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
