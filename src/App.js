import React, { Component } from 'react';
import { Router } from '@reach/router';
import Articles from './components/Articles';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import UserLogin from './components/UserLogin';
import NavBar from './components/NavBar';
import PostArticle from './components/PostArticle';
import WrongTurn from './components/WrongTurn';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('loggedInUser')
  };

  setUser = () => {
    this.setState({ currentUser: localStorage.getItem('loggedInUser') });
  };

  removeUser = () => {
    this.setState({ currentUser: '' });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <NavBar id="navBar" />
        <UserLogin
          id="userLogin"
          setUser={this.setUser}
          removeUser={this.removeUser}
        />
        <Router>
          <Home path="/" user={currentUser} />
          <Articles path="/articles" user={currentUser} />
          <Topics path="/topics" user={currentUser} />
          <Articles path="/articles/topic/:topicSlug" user={currentUser} />
          <SingleArticle path="/articles/:article_id" user={currentUser} />
          <PostArticle path="/users/:username/postarticle" user={currentUser} />
          <WrongTurn path="/*" />
        </Router>
      </div>
    );
  }
}

export default App;
