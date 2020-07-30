import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
const Mobiles = () => {
    const {

        state: { Mobiles },

        addMitem

    } = useContext(CartContext);




    return (

        <>

            <div className="card shadow mt-5 mb-5 bg-white rounded container">

                <ul className="list-group list-group-flush">

                    {Mobiles.map(({ productImg, productName,
                        specifications,
                        price,
                        incart,

                        productRatings: { starRating, totalRating, totalReviews }
                    }, index) =>
                        (
                            <li className="list-group-item">

                                <div className="row">

                                    <div className="col-sm-5">

                                        <div className="row"><img src={productImg} height='380' width='200' alt="phone" /></div>

                                        <br /><br /><br /><br />

                                        <div className="card-body">

                                            <button onClick={() => addMitem(index)} className="btn btn-warning btn-center" disabled={incart === "true" ? true : false}><i className="fa fa-shopping-cart"></i>Add to cart</button>





                                            {/* <button className="card-link btn-lg btn-warning text-white"><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>*/}

                                            <button className="card-link btn btn-danger text-white" >BUY NOW</button>

                                        </div>

                                    </div>

                                    <div className="col">

                                        <div className="row">

                                            <b>{productName}</b>

                                            <p className="ml-4">

                                                <span className="badge badge-success mr-1">

                                                    {starRating}

                                                    <i className="fas fa-star"></i>

                                                </span>

                                                <span className="text-muted">{totalRating}Ratings, {totalReviews}Reviews </span></p>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <ul>

                                                    {specifications.map(x => { return <li>{x}</li> })}

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col">

                                        <span><b>${price}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;

{/*<strike class="text-muted">{actualPrice}</strike>

<p style={{ color: 'green' }}>{offer}</p>*/}

                                    </div>

                                </div>

                            </li>

                        ))}

                </ul>

            </div>

        </>

    );

}

export default Mobiles;
