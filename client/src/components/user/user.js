import React, { Component } from 'react';
// import './user.css';

class User extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
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
=======
      users: []
    }
  }

  componentWillMount() {
    // fetch("/configuration/init", {
    //   method: "GET"
    // });
    fetch("/user", {
      method: "GET",
      dataType: "JSON"
    })
    .then((users) => users.json())
    .then((usr) => {
      this.setState({
        users: usr
      })
    })
    console.log(this.props.users);
  }
  render() {
    console.log(this.props.users);
    // const users = (this.props.users).map((user) => <li>{user.id}</li>)
    return (
      <div>
        <ul>
          {/* {users} */}
        </ul>
>>>>>>> 6afe042feb0ae872b3e6d7d203f3e23bb9c5f0db
      </div>
    );
  }
}

export default User;
