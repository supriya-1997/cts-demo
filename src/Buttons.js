import React from 'react'

const Buttons = ({ deletedata, index }) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-7">

                    <button className="btn btn-white font-weight-bold text-primary">
                        SAVE FOR LATER
          </button>
                </div>
                <div className="col">
                    <button onClick={() => deletedata(index)} className="btn btn-white font-weight-bold text-danger">
                        REMOVE
                </button>
                </div>
            </div>


        </>
    )
}

export default Buttons
