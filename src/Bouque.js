import React, { useState,useEffect} from 'react';

const Bouque = ()=>

{

const [bouque,setBouque] = useState([]);

useEffect(()=>{

fetch('https://jsonblob.com/api/f79f35e9-bd49-11ea-a129-47cd7a506418')

.then(response => response.json())

.then(json => {

setBouque([...json])

})

},[]);

return (

<>

<div class="card shadow mt-5 mb-5 bg-white rounded container">

<ul className="list-group list-group-flush">

{bouque.map(({ image,name,price
},index)=>
(

<li class="list-group-item">

<div class="row">

<div class="col-sm-5">

<div class="row"><img src={image} height='380' width='200' /></div>

<br /><br /><br /><br />

<div class="card-body">

<button className="btn btn-warning btn-center"><i className="fa fa-shopping-cart"></i>Add to cart</button>

{/* <button className="card-link btn-lg btn-warning text-white"><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>*/}

<button className="card-link btn btn-danger text-white" >BUY NOW</button>

</div>

</div>

<div class="col">

<div class="row">

<b>{name}</b>

</div>



</div>

<div class="col">

<span><b>{price}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;


</div>

</div>

</li>

))}


</ul>

</div>

</>

);

}

export default Bouque;