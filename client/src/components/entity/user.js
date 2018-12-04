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
    // if(this.state.users && this.state.users.length == 0) {
      fetch("/user", {
        method: "GET",
        dataType: "JSON"
      })
      .then(data => data.json())
      .then(users => this.setState({users}));
    // }
    var show = this.state.show;
    if(this.state.show[ind] == 'hide'){
      show = new Array(3).fill('hide');
      show[ind] = 'show';
    }
    this.setState({show})
  }

  addUser = () => {
    fetch("/user/add", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      dataType: "JSON",
      body: JSON.stringify({
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        login: document.getElementById('login').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value
      })
    })
    .then((data) => {
      if(data.status == 200){
        document.getElementById('message').innerHTML = 'Аккаунт был успешно создан';
      }
    })

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
      <div id="message"></div>
        <div className={"users__" + this.state.show[0]}>
          <ul>
            {this.state.users.map(user => (
              <li className="user" key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        </div>
        <div className={"users-add users__" + this.state.show[1]}>
          <input id="firstName" className="users-add__input" type="text" placeholder="First name"/>
          <input id="lastName" className="users-add__input" type="text" placeholder="Last name"/>
          <input id="login" className="users-add__input" type="text" placeholder="login"/>
          <input id="password" className="users-add__input" type="text" placeholder="password"/>
          <input id="email" className="users-add__input" type="text" placeholder="email"/>
          <input onClick={this.addUser} className="users-add__submit" type="submit" value="registration"/>
        </div>
      </div>
    );
  }
}

export default User;
