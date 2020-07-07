import React,{useContext} from 'react'
import {CartContext} from '../CartContext'
const Dress = () => {
    const {

        state: { Dress },
        
        addDitem
        
        } = useContext(CartContext);

    return (
        <>
            <div class="container">
                <div class="row">
                    {Dress.map(({ productImg, productName,
                        incart,
                        price,
                        size

                    },index) =>
                        <div class="col-sm-4">
                            <div class="card shadow mt-3  mb-5 bg-white rounded " style={{ width: '18rem', height: '32rem' }}>
                                <div class="card-body">
                                    <div class="row">
                                        <div className="col">
                                            <img src={productImg} height='300' width='250' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <b>{productName}</b>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col"><b>${price}</b></div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col">Size:{size}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <button onClick={() => addDitem(index)} className="card-link btn-sm btn-warning text-white" disabled={incart == "true" ? true : false}>
                                                <i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                                        </div>
                                        <div class="col">
                                            <button className="card-link btn-sm text-white" style={{ backgroundColor: 'Tomato' }}>
                                                BUY NOW</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dress