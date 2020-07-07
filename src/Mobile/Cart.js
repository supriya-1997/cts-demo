import React  from 'react'
import useMobileAPI from './useMobileAPI'

const Cart=({cart })=> {
    return (
        <>
       <pre> {JSON.stringify(cart,null,4)}</pre>
       
        </>
    )
}

export default Cart