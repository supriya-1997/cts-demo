import React from 'react'

const DeliveryLocation = () => {
    return (
        <>

            <div className="card" style={{ width: '500px', margin: '0 auto', float: 'none' }}>
                <div className="container">
                    <div className="card-header">
                    <div  className="ml-3" >

                        Choose your location
                        </div>
          </div>
                    <p>Delivery options and delivery speeds may vary for different locations</p>
                    <button type="button" className="btn btn-block  float-left" style={{ backgroundColor: '#ffb84d' }} > Sign in to see your addresses</button>
                    <p className="ml-3 mt-3" style={{ textAlign: 'center' }}>or enter a US zip code</p>
                    <form>
                        <div className="card-body" style={{height:'250px'}}>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" name="name" />
                                </div>
                               
                                <div className="col-4">
                                    <button type="button" className="btn btn-block float-left" style={{ backgroundColor: '#e6ffff' }}> Apply</button>
                                    </div>
                                
                            </div>
                            <p className="ml-3 mt-3" style={{ textAlign: 'center' }}>or </p>
                            <label for="sel1"></label>
                            <select class="form-control" id="sel1">
                                <option>India</option>
                                <option>Australia</option>
                                <option>Germany</option>
                                <option>France</option>
                            </select>
                        </div>



                        <button type="button" className="btn  float-right" style={{ backgroundColor: '#ffa64d' }}> Done</button>
                        </div>
                        </form>
                </div>

            </div>

        </>
    )
}

export default DeliveryLocation
