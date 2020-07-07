import React,{useContext} from 'react'
import DeliveryImage from './DeliveryImage';
import DropdownIcon from './DropdownIcon';
import ItemDetails from './ItemDetails';
import FlipkartContext from "../context/FlipkartContext";
//const ItemCard = ({ cart, decrementCounter, incrementCounter, deletedata }) => {
    const ItemCard=()=>{
        const {state:{cart,decrementCounter,incrementCounter,deletedata}}=useContext(FlipkartContext);
    return (
        <>
            {cart.map((item, index) =>
                <div class="card text-left" style={{ width: '55rem' }}>
                    <div class="card-header">
                        <div className="float-left">
                            My cart(1)
                        </div>
                        <div className="float-right">
                            <DeliveryImage />
                            <span >Deliver to</span>&nbsp;&nbsp;

                            <input type="text" value="Hyderabad-501401" />
                            <DropdownIcon />

                        </div>

                    </div>
                    <div class="card-body">

                        <ItemDetails
                            item={item}
                            decrementCounter={decrementCounter}
                            incrementCounter={incrementCounter}
                            deletedata={deletedata}
                            index={index}
                        >
                        </ItemDetails>

                    </div>
                    <div class="card-footer ">

                        <div className="col">
                            <a href="#" class="btn  float-right text-white" style={{ backgroundColor: 'Tomato' }}>PLACE ORDER</a>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default ItemCard
