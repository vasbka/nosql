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
  let f = () => {
    fetch("/user", {
      method: "GET",
      dataType: "JSON"
    })
    .then(data => data.json())
    .then(data => console.log(data));
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
        <h2>users</h2>
      </div>
    );
  }
}

export default User;
