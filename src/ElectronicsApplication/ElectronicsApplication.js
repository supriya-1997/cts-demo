import React from 'react'
import useElectronicsApplication from '../ElectronicsApplication/useElectronicsApplication'
import MobileElectronic from '../ElectronicsApplication/MobileElectronic'
import Laptop from '../ElectronicsApplication/Laptop'
import Electronic from '../ElectronicsApplication/Electronic'
import Tablet from '../ElectronicsApplication/Tablet'


const ElectronicsApplication = () => {

    const { state:
        { 
           Mobiles,
           Laptops,
           Cameras,
           Tablets
        }
    } = useElectronicsApplication();

    return (
        <>
            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {Mobiles.map((item) =>
                        <MobileElectronic item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {Laptops.map((item) =>
                        <Laptop item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {Cameras.map((item) =>
                        <Electronic item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    { Tablets.map((item) =>
                        <Tablet item={item} />
                    )}
                </ul>
            </div>

            


        </>
    )
}

export default ElectronicsApplication