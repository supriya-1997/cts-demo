import React from 'react';
import './App.css';
import AmazonFooter from './Amazon/AmazonFooter'
import Home from './Amazon/Home'
import Login from './Amazon/Login'
import CreateAccount from './Amazon/CreateAccount'
import Main from './components/Main'
import DeliveryLocation from './Amazon/DeliveryLocation'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const App = () => {

  return (
    <div>


      <Router>


        <Main />


        <Route exact path="/home" component={Home}></Route>

        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/CreateAccount" component={CreateAccount}></Route>

      </Router>

      <AmazonFooter></AmazonFooter>
      {/*<DeliveryLocation/>*/}

    </div>
  );

}
export default App