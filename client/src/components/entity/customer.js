import React, { Component } from 'react';

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: {
        index: 0
      }
    }
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
        <h2>Customers</h2>
      </div>
    );
  }
}

export default Customer;
