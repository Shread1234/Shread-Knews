import React, { Component } from 'react';
import { Router } from '@reach/router';
import Articles from './components/Articles';
import Home from './components/Home';

class App extends Component {
  state = {
    currentUser: ''
  };

  handleUserChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ currentUser: value });
  };

  handleClick = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
