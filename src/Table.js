import React, { Component } from 'react';
import Tbody from "./Tbody";
class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {
      table: { ...this.props },
      formData: {
        start: '',
        end: ''
      },
      counter:0
    }
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
}
decrmentCounter() {
     this.setState({counter: this.state.counter - 1})
    
}
  updateTable() {
    const { table, formData } = this.state;
    this.setState({
      table: {
        ...table,
        ...formData
      },
      formData: {
        start: '',
        end: ''
      }
    });
  }
  handleInput(e) {
    const { target: {
      value,
      id
    } } = e;
    this.setState({ formData: { ...this.state.formData, [id]: value } })
  }

  render() {
    console.log("Hi welcome to react programming");
    const { table: { start = 1, end = 6 }, formData,counter } = this.state;
    return (

      <div>
       
        {!!counter && (
                    <button type="button" onClick={() => this.decrmentCounter()} className="btn btn-primary m-2">-</button>
                )}
                 <span className="badge badge-success">
                    {counter}
                </span>
                 <button type="button" onClick={() => this.incrementCounter()} className="btn btn-primary">+</button>
       
        <pre>
          {JSON.stringify(this.props, null, 4)}
        </pre>
        <table class="table table-borderless table-dark">
          <thead>
            <tr>
              <th scope="col">start</th>
              <th scope="col">operation</th>
              <th scope="col">end</th>
              <th scope="col">assignment</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            {
              [...new Array(parseInt(end))].map((item, index) => (
                <Tbody start={start} index={index}></Tbody>
              ))
            }
          </tbody>
        </table>
        <pre>
          {JSON.stringify(this.state, null, 4)}
        </pre>
        <br />

        <div className="form-group">
          <label for="start">Table starts</label>
          <input type="email" className="form-control" value={formData.start} onChange={(e) => this.handleInput(e)} id="start" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="end">Ends with</label>
          <input type="text" value={formData.end} onChange={(e) => this.handleInput(e)} className="form-control" id="end" />
        </div>

        <button type="submit" onClick={() => this.updateTable()} className="btn btn-success">Submit</button>

      </div>
    )
  }
}



export default Table