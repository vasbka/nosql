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
