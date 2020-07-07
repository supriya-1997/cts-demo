import React from 'react'
import useKidsApplication from '../KidsApplication/useKidsApplication'
import KidsCloth from '../KidsApplication/KidsCloth'
import FootKid from '../KidsApplication/FootKid'
import Toy from '../KidsApplication/Toy'
import Brand from '../KidsApplication/Brand'


const KidsApplication = () => {

    const { state:
        { 
            Clothings,
            Toys,
             Brands,
            KidsFoot
            
        }
    } = useKidsApplication();

    return (
        <>
            <div class="container">
            <div class="row">
                    {Clothings.map((item) =>
                        <KidsCloth item={item} />
                    )}
                </div>
            </div>

            <div class="container">
                <div class="row">
                    {Toys.map((item) =>
                        <Toy item={item} />
                    )}
                </div>
            </div>

            <div class="container">
            <div class="row">
                    {Brands.map((item) =>
                        <Brand item={item} />
                    )}
                </div>
            </div>

            <div class="container">
            <div class="row">
                    { KidsFoot.map((item) =>
                        <FootKid item={item} />
                    )}
                </div>
            </div>

            


        </>
    )
}

export default KidsApplication
