import React, {useContext, useEffect,useReducer } from 'react';
import RemoveButton from './RemoveButton';
import Header from './Header';
import ItemCard from './ItemCard';
import Loader from './Loader';
import Price from './Price';
import Stringify from './Stringify';

import {FlipkartContext} from "../context/FlipkartContext";
const Cart = () => {
    
    const {
        state,
        incrementCounter,
        decrementCounter,
        deletedata
    }=useContext(FlipkartContext);

    return (
        <>
           
            <Header/>
            <Stringify context={state}></Stringify>
            {!state.isAPILoaded ? (<Loader/>) : (

                <div>
                    {!state.cart.length ?(<RemoveButton/>):  (
                            <div className="row">

                                <div className="col-sm-9">
                                <ItemCard
                                       
                                    >
                                    </ItemCard>
                                </div>

                                <div className="col ">

                                   <Price></Price>
                                </div>

                            </div>

                        )}

                </div>

            )}
        </>
    )


}

export default Cart
