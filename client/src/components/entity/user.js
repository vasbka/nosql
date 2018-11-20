import React, { Component } from 'react';
import './user.scss';

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      show : true
    }
  }
  onClick = () => {
    if(this.state.users && this.state.users.length == 0) {
      fetch("/user", {
        method: "GET",
        dataType: "JSON"
      })
      .then(data => data.json())
      .then(users => this.setState({users}));
    }
    if(this.state.show == 'show')
      this.setState({show: 'hide'})
    else
      this.setState({show: 'show'})
  }
  createSession = () => {
    fetch("/user/create", {
      method: "GET",
      dataType: "JSON"
    })
    .then((data) => {
      data.json().then(res => console.log(res));
    })
  }
  render() {
    const { customers } = this.state;
    return (
      <div className="App">
        <h2>users</h2>
        <input type="submit" onClick={this.createSession}/>
        <input type="submit" onClick={this.onClick}/>
        <ul className={"users__" + this.state.show}>
          {this.state.users.map(user => (
            <li className="user" key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
