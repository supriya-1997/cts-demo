import React from 'react'

import { Link } from 'react-router-dom'



const CheckOut = () => {

return (

<>

<div className="text-center mb-5">

<div className="mt-5"> <img height="350px" width="450px"

src="https://i.pinimg.com/originals/51/ce/e6/51cee67564790d275cac21c4b754d8bb.gif" />

</div>

<h3>Feel The Music...</h3>

<h2> " ORDER PLACED SUCCESSFULLY"</h2>

<Link to='/home'>

<button className="btn btn-danger mt-3 ">Home</button>

</Link>

</div>



</>

)

}

export default CheckOut;