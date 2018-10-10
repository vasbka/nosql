import React, { Component } from 'react';
import './App.scss';
import Header from './components/general/header';
import Container from './components/general/container';

import { BrowserRouter as Router} from 'react-router-dom';
import { TransitionGroup, CSSTRansition } from 'react-transition-group';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;
