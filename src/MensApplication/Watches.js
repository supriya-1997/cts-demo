import React from 'react'

const Watches=({ item: { image, name,
    assured,
    price: { offerPrice, originalPrice, offer }
    
} })=> {
    return (
        <>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="row"><img src={image} height='280' width='300' /></div>
                        <br /><br /><br /><br />
                        
                    </div>
                    <div class="col">
                        <div class="row">
                            <b>{name}</b>
                            
                        </div>
                        
                    </div>
                    <div class="col">
                        <span><b>{offerPrice}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img
                            src={assured}
                            width="77px" height="21px" /><br />

                        <strike class="text-muted">{originalPrice}</strike>
                        <p style={{ color: 'green' }}>{offer}</p>
                        
                    </div>

                </div>

            </li> 
        </>
    )
}

export default Watches
