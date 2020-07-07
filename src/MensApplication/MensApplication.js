import React from 'react'
import useMensApplication from '../MensApplication/useMensApplication'
import Cloth from '../MensApplication/Cloth'
import Footwears from '../MensApplication/Footwears'
import SeasonalWears from '../MensApplication/SeasonalWears'
import Watches from '../MensApplication/Watches'


const MensApplication = () => {

    const { state:
        { 
            Clothes,
            FootWear,
            Seasonalwear,
            Watch
            
        }
    } = useMensApplication();

    return (
        <>
            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {Clothes.map((item) =>
                        <Cloth item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {FootWear.map((item) =>
                        <Footwears item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    {Seasonalwear.map((item) =>
                        <SeasonalWears item={item} />
                    )}
                </ul>
            </div>

            <div class="card shadow mt-5  mb-5 bg-white rounded container">
                <ul class="list-group list-group-flush">
                    { Watch.map((item) =>
                        <Watches item={item} />
                    )}
                </ul>
            </div>

            


        </>
    )
}

export default MensApplication
