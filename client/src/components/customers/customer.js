import React, { Component } from 'react';
import './customer.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: {}
    }
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(customers =>
        this.setState(
          {customers},
          () => console.log(customers.message)
        )
      );
  }

  render() {
    return (
      <div className="App">
        <h2>Customers</h2>
        {/* <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul> */}
        {this.state.customers.message}
      </div>
    );
  }
}

export default Customers;
