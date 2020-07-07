import React, { useContext } from 'react'

import { CartContext } from '../CartContext'

import Counter from './Counter';

import EmptyCart from './EmptyCart';

import TotalAmount from './TotalAmount';




const Cart = () => {

const {

state: {cart },

removeProduct

} = useContext(CartContext);

return (

<>



<div className="row">

<div className="col-8 mt-4">

<div className=" container " style={{ border: '1px solid white' }}>

{(cart.length == 0) ? <EmptyCart /> : (

<>

{cart.map(({ productName,id,productImg, price, quantity }, index) => (

<div className="card mb-2 mt-2 " style={{

height: '400px',

width: '600px'

}} >

<div className="row">

<div className="col-md-8">

<div className="card-body">

<h5 className="card-title">{productName}</h5>

<p className="card-text"><small class="text-body"><b> ${price}</b></small></p>

<div className="d-flex justify-content-between mt-5 ">

<Counter quantity={quantity} index={index}>

</Counter>

<span className="badge badge-success pt-2 mt-3" style={{ height: '30px' }} >Qty : {quantity}</span>

<button onClick={() => removeProduct(index)}

className="btn btn-danger mt-2" style={{ height: 'fit-content' }}>REMOVE</button></div>

</div>

</div>

<div className="col-md-4">

<img height="320" width="200" src={productImg} class="card-img" alt="..." />

</div>

</div>

</div>

))

}

</>

)}

</div>

</div>

<div className="col-3 border ml-4 mt-4 mr-4 float-right bg-light jumbotron" style={{ height: 'fit-content' }}>

<TotalAmount />

</div>

</div>



</>

)

}

export default Cart;