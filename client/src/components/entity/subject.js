import React, { Component } from 'react';
import './user.scss';
import './general.scss';
import CRUDop from '../general/CRUDop.js';
import ReactDOM from 'react-dom';

class Subject extends Component {
  constructor() {
    super();
    this.state = {
      subjects: [],
      show : ['hide', 'hide', 'hide']
    }
  }

  containerByIndex = (ind) => {
    CRUDop.get('subject').then(subjects => this.setState({subjects}));
    var show = this.state.show;
    if(this.state.show[ind] == 'hide'){
      show = new Array(3).fill('hide');
      show[ind] = 'show';
    }
    this.setState({show})
  }

  addSubject = () => {
    var message = document.getElementById('message');
    message.style.display = 'block';
    var subject = {
      name: document.getElementById('name').value,
      subjectTypeId: document.getElementById('subjectTypeId').value,
    };
    CRUDop.add('subject', JSON.stringify(subject))
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

  deleteSubject = id => {
    CRUDop.delete('subject', id)
    .then((res) => {
      if(res){
        document.getElementById('message').innerHTML = 'Аккаунт был успешно удален.';
        var subjects = this.state.subjects.filter(function(subject) { return subject.id != id });
        this.setState({ subjects: subjects });
      } else {
        document.getElementById('message').innerHTML = 'Во время удаления аккаунта произошла проблема.';
      }
    })
  }

  saveSubject = (id, index) => {
    document.getElementById('message').style.display = 'block';
    var subjectFields = document.getElementsByClassName('subject')[index].getElementsByClassName('field');
    var subject = {
      name: subjectFields[0].value,
      subjectTypeId:  subjectFields[1].value,
      id: id
    };

    CRUDop.save('subject', JSON.stringify(subject))
    .then((data) => {
      if(data) {
        document.getElementById('message').innerHTML = 'Предмет был успешно изменен!';
      } else {
        document.getElementById('message').innerHTML = 'Во время изменения ПРедмета произошла ошибка';
      }
    })
    setTimeout(function() {
      document.getElementById('message').style.display = 'none';
    }, 1500);
  }

  filter = () => {
    var attr = document.getElementsByName('attr')[0].value;
    var value = document.getElementById('filterValue').value;
    CRUDop.getByCondition('subject', {name: attr, value: value})
    .then((subjects) => {
      this.setState({subjects})
    })
  }


  render() {
    return (
      <div className="App">
      <h2>subjects</h2>
      <nav className="user__menu menu">
        <div className="menu__item" accessKey="g" onClick={this.containerByIndex.bind(null, 0)} value="Get all">Get all</div>
        <div className="menu__item" accessKey="a" onClick={this.containerByIndex.bind(null, 1)} value="Add new">Add new</div>
      </nav>
      <div id="message"></div>
        <div className={"users__" + this.state.show[0]}>
          <div>
            filter
            <select name="attr" id="">
              <option value="id">uid</option>
              <option value="name">subject name</option>
              <option value="subjectTypeId">subject type id (1 - exams, 2 - certificates)</option>
            </select>
            <input id="filterValue" type="text" placeholder="Введите искомое значение"/>
            <input type="submit" value="Filter" onClick={this.filter}/>
            <input type="submit" value="Clear filter" onClick={this.containerByIndex.bind(null, 0)}/>
          </div>
          <div className="field title">name</div>
          <div className="field title">type id</div>
          <div className="field title">Delete</div>
            {this.state.subjects.map((subject, index) => (
              <div className="subject" key={subject.id}>
                <input className="field" defaultValue={subject.name}></input>
                <input className="field" defaultValue={subject.subjectTypeId}></input>
                <div className="field">
                  <input className="functionality-button" accessKey="d" type="submit" onClick={this.deleteSubject.bind(null, subject.id)} value="Delete"/>
                  <input className="functionality-button" accessKey="s" type="submit" onClick={this.saveSubject.bind(null, subject.id, index)} value="Save"/>
                </div>
              </div>
            ))}
        </div>
        <div className={"users-add users__" + this.state.show[1]}>
          <input id="name" className="users-add__input" type="text" placeholder="Subject name"/>
          <input id="subjectTypeId" className="users-add__input" type="text" placeholder="Type id (1 - exams, 2 - certificates)"/>
          <input onClick={this.addSubject} className="users-add__submit" type="submit" value="registration"/>
        </div>
      </div>
    )}
}
export default Subject;
