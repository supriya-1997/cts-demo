import React, { useState, useEffect } from 'react';
import Mobiles from './Mobiles'
import useMobileAPI from './useMobileAPI';
import Cart from './Cart';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const Mobile= () => {
   const{ state:
    {
       mobile,
       cart
    },handleUpdate
   } =useMobileAPI();
    return (
        <>
        
        <div className="container ">
        <Router>
        <div className="row bg-light mt-3">
            <div className="col"><Link to="/mobile"><h5 className="mt-3">Mobiles</h5></Link></div>
            
        </div>
        <Route exact path="/mobile" component={() =><Mobiles mobile={mobile} handleUpdate={handleUpdate}/>}></Route>
        <Route exact path="/cart" component={() =><Cart cart={cart} handleUpdate={handleUpdate}/>}></Route>
       
        </Router>
        </div>
        </>
)
}

export default Mobile