import React, { Component } from 'react';
import CRUDop from '../general/CRUDop.js';
import './general.scss'
import ReactDOM from 'react-dom';

class Faculty extends Component {
  constructor() {
    super();
    this.state = {
      faculties: [],
      show : ['hide', 'hide', 'hide']
    }
  }

  containerByIndex = (ind) => {
    CRUDop.get('faculty')
    .then(faculties => this.setState({faculties}));
    var show = this.state.show;
    if(this.state.show[ind] == 'hide'){
      show = new Array(3).fill('hide');
      show[ind] = 'show';
    }
    this.setState({show});
  }

  addFaculty = () => {
     document.getElementById('message').style.display = 'block';
    var user = {
      name: document.getElementById('name').value,
      totalCount: document.getElementById('totalCount').value,
      budgetCount: document.getElementById('budgetCount').value
    };
    CRUDop.add('user', JSON.stringify(user))
    .then((res) => {
      if(res){
        document.getElementById('message').innerHTML = 'Аккаунт был успешно создан';
      } else {
        document.getElementById('message').innerHTML = 'Во время создания аккаунта произошла проблема.';
      }
    });
    setTimeout(function() {
      document.getElementById('message').style.display = 'none';
    }, 1500)
  }

  deleteFaculty = id => {

  }

  saveFaculty = (id, ind) => {
    
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="App">
      <h2>Faculties</h2>
     <nav className="user__menu menu">
       <div className="menu__item" onClick={this.containerByIndex.bind(null, 0)} value="Get all">Get all</div>
       <div className="menu__item" onClick={this.containerByIndex.bind(null, 1)} value="Add new">Add new</div>
     </nav>
     <div id="message"></div>
       <div className={"users__" + this.state.show[0]}>
         <div className="field title">Name</div>
         <div className="field title">Total count</div>
         <div className="field title">Budget count</div>
         <div className="field title">Functions</div>
           {this.state.faculties.map(faculty => (
             <div className="user" key={faculty.id}>
               <input className="field" defaultValue={faculty.name}></input>
               <input className="field" defaultValue={faculty.generalCount}></input>
               <input className="field" defaultValue={faculty.budgetCount}></input>
               <div className="field">
                 <input className="functionality-button" type="submit" onClick={this.deleteFaculty.bind(null, faculty.id)} value="Delete"/>
                 <input className="functionality-button" type="submit" onClick={this.saveFaculty.bind(null, faculty.id)} value="Save"/>
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

export default Faculty;
