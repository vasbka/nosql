import React, { Component } from 'react';
// import './user.css';

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  onClick = () => {
    fetch("/user", {
      method: "GET",
      dataType: "JSON"
    })
    .then(data => data.json())
    .then(users => this.setState({users}, console.log(users)));
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
        <h2>users</h2>
        <input type="submit" onClick={this.onClick}/>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default User;
