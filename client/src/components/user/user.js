import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
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
      </div>
    );
  }
}

export default User;
