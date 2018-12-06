import React, { Component } from 'react';
import './user.scss';
import './general.scss';
import CRUDop from '../general/CRUDop.js';
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
    CRUDop.get('user').then(users => this.setState({users}));
    var show = this.state.show;
    if(this.state.show[ind] == 'hide'){
      show = new Array(3).fill('hide');
      show[ind] = 'show';
    }
    this.setState({show})
  }

  addUser = () => {
    var message = document.getElementById('message');
    message.style.display = 'block';
    var user = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      login: document.getElementById('login').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value
    };
    CRUDop.add('user', JSON.stringify(user))
    .then((res) => {
      if(res){
        message.innerHTML = 'Аккаунт был успешно создан';
      } else {
        document.getElementById('message').innerHTML = 'Во время создания аккаунта произошла проблема.';
      }
    });
    setTimeout(function() {
      document.getElementById('message').style.display = 'none';
    }, 1500)
  }

  deleteUser = id => {
    CRUDop.delete('user', id)
    .then((res) => {
      if(res){
        document.getElementById('message').innerHTML = 'Аккаунт был успешно удален.';
        var users = this.state.users.filter(function(user) { return user.id != id });
        this.setState({ users: users });
      } else {
        document.getElementById('message').innerHTML = 'Во время удаления аккаунта произошла проблема.';
      }
    })
  }

  saveUser = (id, index) => {
    document.getElementById('message').style.display = 'block';
    var userFields = document.getElementsByClassName('user')[index].getElementsByClassName('field');
    var user = {
      firstName: userFields[0].value,
      lastName:  userFields[1].value,
      login: userFields[2].value,
      password: userFields[3].value,
      email: userFields[4].value,
      id: id
    };

    CRUDop.save('user', JSON.stringify(user))
    .then((data) => {
      if(data) {
        document.getElementById('message').innerHTML = 'Юзер был успешно изменен!';
      } else {
        document.getElementById('message').innerHTML = 'Во время изменения юзера произошла ошибка';
      }
    })
    setTimeout(function() {
      document.getElementById('message').style.display = 'none';
    }, 1500);
  }


  render() {
    const { customers } = this.state;
    return (
      <div className="App">
      <h2>users</h2>
      <nav className="user__menu menu">
        <div className="menu__item" accessKey="g" onClick={this.containerByIndex.bind(null, 0)} value="Get all">Get all</div>
        <div className="menu__item" accessKey="a" onClick={this.containerByIndex.bind(null, 1)} value="Add new">Add new</div>
      </nav>
      <div id="message"></div>
        <div className={"users__" + this.state.show[0]}>
          <div className="field title">First name</div>
          <div className="field title">Last name</div>
          <div className="field title">Login</div>
          <div className="field title">Pwd</div>
          <div className="field title">Email</div>
          <div className="field title">Delete</div>
            {this.state.users.map((user, index) => (
              <div className="user" key={user.id}>
                <input className="field" defaultValue={user.firstName}></input>
                <input className="field" defaultValue={user.lastName}></input>
                <input className="field" defaultValue={user.login}></input>
                <input className="field" defaultValue={user.password}></input>
                <input className="field" defaultValue={user.email}></input>
                <div className="field">
                  <input className="functionality-button" accessKey="d" type="submit" onClick={this.deleteUser.bind(null, user.id)} value="Delete"/>
                  <input className="functionality-button" accessKey="s" type="submit" onClick={this.saveUser.bind(null, user.id, index)} value="Save"/>
                </div>
              </div>
            ))}
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
    )}
}
export default User;
