import React,{useContext} from 'react'
import {FlipkartContext} from "../context/FlipkartContext";
const Price = () => {
    const {state:{totalAmount}} =useContext(FlipkartContext)
    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-header">
                    PRICE DETAILS
                                        </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-8">
                                Price(1 item)
                                                </div>
                            <div className="col">
                                <b>&#8377; {totalAmount}</b>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-8">
                                Delivery Fee
                                                </div>
                            <div className="col">
                                <p className="text-success"> Free</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-sm-8">
                                <b>Total Amount</b>
                            </div>
                            <div className="col">
                                <b>&#8377; {totalAmount}</b>
                            </div>
                        </div>


                    </li>
                    <li class="list-group-item"><p className="text-success">You will save ₹2,996 on this order</p></li>
                </ul>
            </div>

        </>
    )
}

export default Price
