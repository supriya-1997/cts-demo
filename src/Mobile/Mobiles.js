import React from 'react'

const Mobiles=({mobile,handleUpdate })=> {
    return (
        <>
         <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {mobile.map(({ productImg, productName,
    specifications,
    productPrice: { cutOffPrice, actualPrice, offer },
    productRatings: { starRating, totalRating,totalReviews }
},index) =>
           <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="row"><img src={productImg} height='300' width='250' /></div>
                        <br /><br /><br /><br />
                        <div class="card-body">

                        <button onClick={(e)=>handleUpdate(e,index)} id="mobile" className="btn btn-warning btn-center"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                        
                          {/* <button className="card-link btn-lg btn-warning text-white"><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>*/}
                           <button className="card-link btn btn-danger text-white" >BUY NOW</button> 
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <b>{productName}</b>
                            <p class="ml-4">
                                <span class="badge badge-success mr-1">
                                   {starRating}
                                <i class="fa fa-star-o"></i>
                                </span>
                                <span class="text-muted">{totalRating}Ratings, {totalReviews}Reviews </span></p>
                        </div>
                        <div class="row">
                            <div class="col">
                                {specifications.map(x =>
                                    <li>{x}</li>
                                )
                                }
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <span><b>{cutOffPrice}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    

                        <strike class="text-muted">{actualPrice}</strike>
                        <p style={{ color: 'green' }}>{offer}</p>
                    </div>

                </div>

            </li>
  )}
  </ul>
</div>
        </>
    )
}

export default Mobiles