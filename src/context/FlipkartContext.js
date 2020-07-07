import React,{createContext} from 'react';
import useAPI from '../reducers/useAPI';
export const FlipkartContext = createContext();
export const  FlipkartProvider = props => {
    return (
        <FlipkartContext.Provider value={{...useAPI()}}>
            {props.children}
        </FlipkartContext.Provider>
    )

    
}