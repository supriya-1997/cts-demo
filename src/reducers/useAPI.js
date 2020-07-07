import React,{useEffect,useReducer} from 'react';
import reducer from './reducer'

{/*const useAPI=()=> {
    const INITIAL_STATE={
        cart:[],
        isAPILoaded:false,
        totalAmount:0
    }
    const reducer=(state,action)=>{
        const {type,payload}=action
        const {cart}=state;
        switch(type)
        {
            case 'API_SUCCESS':{
                return{
                 ...state,
                 ...payload

                }
        }
        case 'SET_TOTAL_AMOUNT':{
            //const totalCost=(cart.reduce((acc, item) => acc + parseInt(item.offerPrice) * item.quantity, 0))
            const totalCost=cart.map(cartItem=>parseInt(cartItem.offerPrice)*cartItem.quantity)
            return {
                ...state,
                totalAmount:totalCost.reduce((acc,item)=>acc+item,0)
                //totalAmount: cart.reduce((acc, item) => acc + parseInt(item.offerPrice), 0)
            }

        }
        case 'INC_COUNTER':{
            const {index}=payload;
            cart[index].quantity++;
            return {
                ...state,
                cart:[...cart]
            }
            
        }
        case 'DEC_COUNTER':{
            const {index}=payload;
            cart[index].quantity--;
            return {
                ...state,
                cart:[...cart]
            }
        }
        case 'REMOVE_PRODUCT':{
            const {index}=payload;
            return {
                ...state,
                cart:[...cart.slice(0, index), ...cart.slice(index + 1)]
               // cart:[...cart.splice(index,1)]
            }
        }
        default:{
            return state
        }
    }
    }
    const [state,dispatch]=useReducer(reducer,INITIAL_STATE)
    const decrementCounter = (index) => {
        dispatch({type:'DEC_COUNTER',payload:{index}})
    }

    const incrementCounter = (index) => {
       dispatch({type:'INC_COUNTER',payload:{index}})
    }

    const deletedata = (index) => {
        dispatch({type:'REMOVE_PRODUCT',payload:{index}})
       

    }
    useEffect(() => {
        fetch('https://jsonblob.com/api/a549ce7a-94f4-11ea-9b86-85b58282e959')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    //setCart([...json])
                    //setIsAPILoaded(true)
                   dispatch({type:'API_SUCCESS',payload:{cart:[...json],isAPILoaded:true}})
                }, 2000)

            })

    }, []);

    useEffect(() => {
     dispatch({type:'SET_TOTAL_AMOUNT'})
        


    }, [state.cart]);

    return{
        state,
        incrementCounter,
        decrementCounter,
        deletedata
    }
   
} */}  
const useAPI = () => {

    const INITIAL_STATE = {
        cart: [],
        isAPILoaded: false,
        totalAmount: 0
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { cart } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/a549ce7a-94f4-11ea-9b86-85b58282e959')
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {
                    dispatch({ type: 'API_SUCCESS', payload: { cart: [...json], isAPILoaded: true } })

                }, 2000)

            })

    }, []);

    useEffect(() => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [cart])

    const decrementCounter = (index) => {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }

    const incrementCounter = (index) => {
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }

    const deletedata = (index) => {
        dispatch({ type: 'DELETE_DATA', payload: { index } })
    }


    return {
        state,
        decrementCounter,
        incrementCounter,
        deletedata
    }


}

export default useAPI

