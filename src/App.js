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
    currentUser: null,
    reloading: false
  };

  componentDidMount() {
    const user = localStorage.getItem('loggedInUser');
    user !== null && this.setState({ currentUser: user });
  }

  setUser = () => {
    this.setState({ currentUser: localStorage.getItem('loggedInUser') });
  };

  removeUser = () => {
    this.setState({ currentUser: null });
  };

  reloadArticles = () => {
    this.setState({ reloading: true });
    setTimeout(() => {
      this.setState({ reloading: false });
    }, 2000);
  };

  render() {
    const { currentUser, reloading } = this.state;
    return (
      <div className="App">
        <NavBar id="navBar" reloadArticles={this.reloadArticles} />
        <UserLogin
          id="userLogin"
          setUser={this.setUser}
          removeUser={this.removeUser}
          currentUser={currentUser}
        />
        <Router>
          <Home path="/" user={currentUser} />
          <Articles
            path="/articles/all"
            user={currentUser}
            reloading={reloading}
          />
          <Topics path="/topics" user={currentUser} />
          <Articles path="/articles/topic/:topicSlug" user={currentUser} />
          <SingleArticle path="/articles/:article_id" user={currentUser} />
          <PostArticle path="/users/:username/postarticle" user={currentUser} />
          <WrongTurn default path="/error" />
        </Router>
      </div>
    );
  }
}

export default App;
