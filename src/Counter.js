import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            

        }
        
    }
    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrmentCounter() {
         this.setState({counter: this.state.counter - 1})
        
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                {/* {JSON.stringify(this.state, null, 4)} */}
                {!!counter && (
                    <button type="button" onClick={() => this.decrmentCounter()} className="btn btn-primary">-</button>
                )}
&nbsp;
                <span className="badge badge-success">
                    {counter}
                </span> &nbsp;
                <button type="button" onClick={() => this.incrementCounter()} className="btn btn-primary">+</button>
            </div>
        )
    }
}
export default Counter;

