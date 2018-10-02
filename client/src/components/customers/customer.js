import React, { Component } from 'react';
import './customer.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: {}
    }
  }

  fetchedBtn = () => {
    fetch("/products", {
      method: "POST",
      dataType: "JSON"
    })
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      console.log(data);
    })
    .then((err) => {
      console.log(err);
    })
  };

  render() {
    return (
      <div className="App">
        <h2>Customers</h2>
        {/* <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul> */}
        <button onClick={this.fetchedBtn}>click me</button>
        {this.state.customers.res}
      </div>
    );
  }
}

export default Customers;
