import React from 'react';
import './App.css';
import AmazonFooter from './Amazon/AmazonFooter'
import Home from './Amazon/Home'
import Login from './Amazon/Login'
import CreateAccount from './Amazon/CreateAccount'
import Main from './components/Main'

import { BrowserRouter as Router,  Route } from "react-router-dom";

const App = () => {

  return (
    <div>


     <Router>


       < Main />


       <Route exact path="/home" component={Home}></Route>

      <Route exact path="/Login" component={Login}></Route>
  <Route exact path="/CreateAccount" component={CreateAccount}></Route>
  
  
  </Router>

     <AmazonFooter></AmazonFooter>
     
   
    </div>
  );

}
export default App
