import React,{Component} from 'react';
class Flipkart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            productsData: [],
            counter: 0,
            totalAmount: '0',
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.productsData != this.state.productsData) {
            const { productsData } = this.state
            const totalCost = productsData.map(product => parseInt(product.prices.cost) * product.quantity)
            this.setState({
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)

            })
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/8f51a8de-8dd7-11ea-82f0-f5d885d3ad80')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    productsData: [...json],
                    totalAmount: parseInt(json.reduce((acc, item) => acc + item.cost, 0))
                })

            })
    }
    incrementCounter(index) {
        const { productsData } = this.state
        productsData[index].quantity++
        this.setState({ productsData: [...productsData] })
    }
    decrmentCounter(index) {
        const { productsData } = this.state
        productsData[index].quantity--
        this.setState({ productsData: [...productsData] })
    }
    removeProduct(index){
        const { productsData } = this.state
        productsData.splice(index,1)
        this.setState({ productsData: [...productsData] })

    }
    render() {
        const { productsData, totalAmount } = this.state;

        return (
            <>

                <div >
                    <div class="row py-5 px-5">
                        <div class="col-8 border ">
                            <h5 className="pt-2 pb-2">My Cart</h5>
                            {productsData.map(({ imageLink, name, quantity, prices: { cost, originalcost, normaloffer } }, index) =>
                                <div className="row border">
                                    <div className="col-3 mt-3 ">
                                        <img style={{ height: '113px', width: '112px' }}
                                            src={imageLink} />

                                        <div className="row pt-3 align-items-center ">
                                            {!!quantity&&(<button onClick={() => this.decrmentCounter(index)}
                                                className="btn btn-primary m-2">-</button>)}
                                            <div className="card p-2 text-center" style={{
                                                height: '39px',
                                                width: '50px'
                                            }}>{quantity}</div>
                                            <button onClick={() => this.incrementCounter(index)}
                                                className="btn btn-primary m-2">+</button>
                                        </div>
                                    </div>
                                    <div className="col-6 py-3">
                                        <h6>{name}</h6>
                                        <div style={{ display: 'flex' }} className="pt-2">
                                            <b className=" pr-2">${cost}</b>
                                            <p className="pr-2"><strike>{originalcost}</strike></p>
                                            <p className="text-success">{normaloffer}%Off</p>
                                        </div>

                                        <a className="pr-3" href="#">SAVE FOR LATER</a>
                                        <button type="button" onClick={() => this.removeProduct(index)}
                                            className="btn btn-primary">REMOVE</button>
                                    </div>

                                </div>
                            )
                            }
                        </div>
                        <div className="col-3 border ml-4 jumbotron" style={{ height: '187px' }}>
                            <h5>PRICE DETAILS</h5><hr />
                            <p className="float-left">Total Amount</p><b className="float-right">{totalAmount}</b>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Flipkart;