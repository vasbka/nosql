import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customer';
import User from './components/user/user';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div className="navbar">            
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <li>
                <Link to="/user"> User</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
            <Route exact path="/user" component={User} />
            <Route path="/customers" component={Customers}></Route>
          </div>
        </Router>

        {/* <Customers></Customers>
        <User></User> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
