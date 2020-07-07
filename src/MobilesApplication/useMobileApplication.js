import React, { useEffect, useReducer } from 'react'
import reducerMobileApplication from '../MobilesApplication/reducerMobileApplication'


const useMobileApplication = () => {
    const INITIAL_STATE = {
        Mobiles:[],
        isAPILoaded: false,
    }
    const [state, dispatch] = useReducer(reducerMobileApplication, INITIAL_STATE);
    const {Mobiles} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/e1f87af4-b55f-11ea-9bad-43f4c0d18248')
            .then(res => res.json())
            .then(json => {
                let [{ mobiles}] = json
                console.log(json)
                setTimeout(() => {
                    dispatch({
                        type: 'API_SUCCESS', payload: {
                            Mobiles:[...mobiles],
                           
                           
                             isAPILoaded: true
                        }
                    })

                }, 2000)

            })

    }, []);

    return {
        state
    }
}
export default useMobileApplication