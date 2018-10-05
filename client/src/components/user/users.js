import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
        users: []
    }
  }

  componentWillMount() {
    fetch("/user/getAll", {
      method: "GET",
      dataType: "JSON"
    });
  }

  render() {
    // setInterval(() => {
    //   console.log('hello');
    // }, 5000, 'hello');
    return (
      <div>

      </div>
    );
  }
}

export default Users
