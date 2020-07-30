import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
const Dress = () => {
    const {

        state: { Dress },

        addDitem

    } = useContext(CartContext);

    return (
        <>
            <div className="container">
                <div className="row">
                    {Dress.map(({ productImg, productName,
                        incart,
                        price,
                        size

                    }, index) =>
                        <div className="col-sm-4">
                            <div className="card shadow mt-3  mb-5 bg-white rounded " style={{ width: '22rem', height: '32rem' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src={productImg} height='300' width='250' alt="dresses" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <b>{productName}</b>
                                    </div>

                                    <div className="row">
                                        <div className="col"><b>${price}</b></div>

                                    </div>
                                    <div className="row">
                                        <div className="col">Size:{size}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-7">
                                            
                                                <button onClick={() => addDitem(index)} className="btn btn-warning btn-center" disabled={incart === "true" ? true : false}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                        </div>
                                        <div className="col">
                                        <button className="card-link btn btn-danger text-white" >BUY NOW</button></div>
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
