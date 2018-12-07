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
     var faculty = {
      name: document.getElementById('name').value,
      generalCount: document.getElementById('generalCount').value,
      budgetCount: document.getElementById('budgetCount').value
    };
    CRUDop.add('faculty', JSON.stringify(faculty))
    .then((res) => {
      if(res){
        document.getElementById('message').innerHTML = 'Факультет был успешно создан';
      } else {
        document.getElementById('message').innerHTML = 'Во время создания факультета произошла проблема.';
      }
    });
    setTimeout(function() {
      document.getElementById('message').style.display = 'none';
    }, 1500)
  }

  deleteFaculty = id => {
    CRUDop.delete('faculty', id)
    .then((res) => {
      if(res){
        document.getElementById('message').innerHTML = 'Факультет был успешно удален.';
        var faculties = this.state.faculties.filter(function(faculty) { return faculty.id != id });
        this.setState({ faculties });
      } else {
        document.getElementById('message').innerHTML = 'Во время удаления факультета произошла проблема.';
      }
    })
  }


    saveFaculty = (id, index) => {
      document.getElementById('message').style.display = 'block';
      var fields = document.getElementsByClassName('faculty')[index].getElementsByClassName('field');
      var faculty = {
        name: fields[0].value,
        generalCount: fields[1].value,
        budgetCount: fields[2].value,
        id: id
      };

      CRUDop.save('faculty', JSON.stringify(faculty))
      .then((data) => {
        if(data) {
          document.getElementById('message').innerHTML = 'Фаукльтет был успешно изменен!';
        } else {
          document.getElementById('message').innerHTML = 'Во время изменения факультета произошла ошибка';
        }
      })
      setTimeout(function() {
        document.getElementById('message').style.display = 'none';
      }, 1500);
    }

    filter = () => {
      var attr = document.getElementsByName('attr')[0].value;
      var value = document.getElementById('filterValue').value;
      CRUDop.getByCondition('faculty', {name: attr, value: value})
      .then((faculties) => {
        this.setState({faculties})
      })
    }


  render() {
    return (
      <div className="App">
      <h2>Faculties</h2>
     <nav className="user__menu menu">
       <div className="menu__item" onClick={this.containerByIndex.bind(null, 0)} value="Get all">Get all</div>
       <div className="menu__item" onClick={this.containerByIndex.bind(null, 1)} value="Add new">Add new</div>
     </nav>
     <div id="message"></div>
       <div className={"users__" + this.state.show[0]}>
         <div>
           filter
           <select name="attr" id="">
             <option value="id">uid</option>
             <option value="name">name</option>
             <option value="generalCount">total count</option>
             <option value="budgetCount">budget count</option>
           </select>
           <input id="filterValue" type="text" placeholder="Введите искомое значение"/>
           <input type="submit" value="Filter" onClick={this.filter}/>
           <input type="submit" value="Clear filter" onClick={this.containerByIndex.bind(null, 0)}/>
         </div>
         <div className="field title">Name</div>
         <div className="field title">Total count</div>
         <div className="field title">Budget count</div>
         <div className="field title">Functions</div>
           {this.state.faculties.map((faculty, index) => (
             <div className="faculty" key={faculty.id}>
               <input className="field" defaultValue={faculty.name}></input>
               <input className="field" defaultValue={faculty.generalCount}></input>
               <input className="field" defaultValue={faculty.budgetCount}></input>
               <div className="field">
                 <input className="functionality-button" type="submit" onClick={this.deleteFaculty.bind(null, faculty.id)} value="Delete"/>
                 <input className="functionality-button" type="submit" onClick={this.saveFaculty.bind(null, faculty.id, index)} value="Save"/>
               </div>
             </div>
           ))}
       </div>
       <div className={"users-add users__" + this.state.show[1]}>
         <input id="name" className="users-add__input" type="text" placeholder="Faculty name"/>
         <input id="generalCount" className="users-add__input" type="text" placeholder="total count "/>
         <input id="budgetCount" className="users-add__input" type="text" placeholder="budget count"/>
         <input onClick={this.addFaculty} className="users-add__submit" type="submit" value="registration"/>
       </div>

      </div>
    )}
}

export default Faculty;
