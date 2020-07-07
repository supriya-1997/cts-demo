import { useReducer, useEffect } from 'react';

import reducer from '../reducers/reducer';

const useAPI = () => {

const INIT_STATE = {

products: [],

isAPILoaded: false,

cart: [],

totalAmount: 0,

Mobiles:[],
Dress:[]




}

const [state, dispatch] = useReducer(reducer, INIT_STATE);

const { products, totalAmount, cart, Mobiles,Dress} = state;

useEffect((prevState) => {

fetch('https://jsonblob.com/api/63fdcfe9-bd21-11ea-a129-63a5de9d01b3').

then(response => response.json()).

then(json => {

dispatch({

type: 'API_SUCCESS',

payload: { products: [...json], isAPILoaded: true }
})

})

}, []);

useEffect((prevState) => {

dispatch({ type: 'TOTAL_AMOUNT' })

}, [cart]);

const incrementCounter = (index) => {

dispatch({

type: 'INCREMENT_COUNTER',

payload: { index }

}

)

}

const decrmentCounter = (index) => {

dispatch({

type: 'DECREMENT_COUNTER',

payload: { index }

}

)

}




const removeProduct = (index) => {

dispatch({

type: 'REMOVE_PRODUCT',

payload: { index }

})

}

const mobiles = () => {

dispatch({

type: 'MOBILES',

})

}

const dress = () => {

    dispatch({
    
    type: 'DRESS',
    
    })
    
    }







const reset = () => {

dispatch({

type: 'RESET'

})

}

const addMitem = (index) => {

dispatch({

type: 'ADD_M_ITEM',

payload: { index }

})

}

const addDitem = (index) => {

    dispatch({
    
    type: 'ADD_D_ITEM',
    
    payload: { index }
    
    })
    
    }





return {

state,

incrementCounter,

decrmentCounter,



addMitem,

addDitem,

removeProduct,
mobiles,
dress,


reset

}

}

export default useAPI;