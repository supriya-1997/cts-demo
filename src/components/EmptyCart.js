import React from 'react';

import { Link } from 'react-router-dom';

const EmptyCart = () => {

return (

<div className="text-center" >

<div className="mt-5"> <img height="270px" width="470px"

src="https://bakestudio.in/assets/images/cart/empty-cart.gif" />

</div>

<div className="text-center">

<h6 >YOUR CART IS EMPTY</h6>

<p>"If You Want Really Feel the Music...Then Order Now.."</p>

<Link to="/home"> <button className="btn btn-dark btn-md mb-5">BuyNow</button></Link>

</div>

</div>

)

}

export default EmptyCart;