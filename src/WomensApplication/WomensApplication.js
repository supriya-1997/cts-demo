import React from 'react'
import useWomensApplication from '../WomensApplication/useWomensApplication'
import ClothDesign from '../WomensApplication/ClothDesign'
import Foot from '../WomensApplication/Foot'
import Jewel from '../WomensApplication/Jewel'
import TitanWatch from '../WomensApplication/TitanWatch'


const WomensApplication = () => {

    const { state:
        { 
            Cloth,
            FootWears,
             Jewellery,
            SonataWatch
            
        }
    } = useWomensApplication();

    return (
        <>
            <div class="container">
            <div class="row">
                    {Cloth.map((item) =>
                        <ClothDesign item={item} />
                    )}
                </div>
            </div>

            <div class="container">
                <div class="row">
                    {FootWears.map((item) =>
                        <Foot item={item} />
                    )}
                </div>
            </div>

            <div class="container">
            <div class="row">
                    {Jewellery.map((item) =>
                        <Jewel item={item} />
                    )}
                </div>
            </div>

            <div class="container">
            <div class="row">
                    { SonataWatch.map((item) =>
                        <TitanWatch item={item} />
                    )}
                </div>
            </div>

            


        </>
    )
}

export default WomensApplication
