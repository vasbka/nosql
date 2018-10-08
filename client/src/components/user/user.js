import React, { Component } from 'react';
// import './user.css';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        index: 0
      }
    }
  }

  // fetchedBtn = () => {
  //   fetch("/configuration/rmAll", {
  //     method: "POST",
  //     dataType: "JSON"
  //   })
  //   .then((res) => res.json())
  //   .then((result) => {
  //     this.setState({
  //       customers: {
  //         index: result.qwer
  //       }
  //     })
  //   });
  // };

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
        <h2>users</h2>
        {/* <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul> */}
        {/* <button onClick={this.fetchedBtn}>
          {customers.index}
        </button> */}
      </div>
    );
  }
}

export default User;
