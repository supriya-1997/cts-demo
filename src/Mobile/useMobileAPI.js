import React, { useState, useEffect,useReducer } from 'react'
import mobilereducer from './mobilereducer'

const useMobileAPI=()=> {
    const ALL_ITEMS ={
     mobile:[],
     cart:[]
     }
    const [state, dispatch]=useReducer(mobilereducer, ALL_ITEMS);
    const {mobile,cart}=state;
    useEffect(() => {
        fetch('https://jsonblob.com/api/e1f87af4-b55f-11ea-9bad-43f4c0d18248')
            .then(res => res.json())
            .then(json => {
                let [{ mobiles}] = json
                setTimeout(() => {
                   dispatch({
                       type: 'API_CALL',payload:{
                        mobile:[...mobiles]
                       }
                   })
                }, 1000)
            })
    }, []);
    const handleUpdate=(e,index)=>{
       
            (dispatch({type:'CART',payload:{
               index
            }}))
        console.log(index)
        
        
    }
    return {
        state,
        handleUpdate
    }
}

export default useMobileAPI