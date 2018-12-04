import React, { Component } from 'react';
import './user.scss';
import ReactDOM from 'react-dom';

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      show : ['hide', 'hide', 'hide']
    }
  }
  containerByIndex = (ind) => {
    if(this.state.users && this.state.users.length == 0) {
      fetch("/user", {
        method: "GET",
        dataType: "JSON"
      })
      .then(data => data.json())
      .then(users => this.setState({users}));
    }
    var show = this.state.show;
    if(this.state.show[ind] == 'hide'){
      show = new Array(3).fill('hide');
      show[ind] = 'show';
    }
    this.setState({show})
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
      <h2>users</h2>
      <nav className="user__menu menu">
        <div className="menu__item" onClick={this.containerByIndex.bind(null, 0)} value="Get all">Get all</div>
        <div className="menu__item" onClick={this.containerByIndex.bind(null, 1)} value="Add new">Add new</div>
      </nav>
        <div className={"users__" + this.state.show[0]}>
          <ul>
            {this.state.users.map(user => (
              <li className="user" key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        </div>
        <div className={"users-add users__" + this.state.show[1]}>
          <input className="users-add__input" type="text" placeholder="First name"/>
          <input className="users-add__input" type="text" placeholder="Last name"/>
          <input className="users-add__input" type="text" placeholder="login"/>
          <input className="users-add__input" type="text" placeholder="password"/>
          <input className="users-add__input" type="text" placeholder="email"/>
          <input className="users-add__submit" type="submit" value="registration"/>
        </div>
      </div>
    );
  }
}

export default User;
