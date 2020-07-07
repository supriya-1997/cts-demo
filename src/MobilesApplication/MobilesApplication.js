import React from 'react'
import useMobileApplication from '../MobilesApplication/useMobileApplication'
import Mobile from '../MobilesApplication/Mobile'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const MobileApplication = () => {

    const { state:
        { 
            Mobiles
           
            
        }
    } = useMobileApplication();

    return (
        <>
           <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/Mobiles"><h5>Mobiles</h5></Link></div></li>
                   

                </ul>
                <Route exact path="/Mobiles" component={() => <Mobile Mobiles={Mobiles} />}></Route>
                
            </Router>

           

            

            
            


        </>
    )
}

export default MobileApplication
