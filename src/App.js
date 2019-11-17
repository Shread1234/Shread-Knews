import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import Articles from './components/Articles';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import UserLogin from './components/UserLogin';
import NavBar from './components/NavBar';
import PostArticle from './components/PostArticle';
import WrongTurn from './components/WrongTurn';
import UserPage from './components/UserPage';
import SignUp from './components/SignUp';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    user !== null && setCurrentUser(user);
  }, [])

  const setUser = () => {
    setCurrentUser(localStorage.getItem('loggedInUser'));
  };

  const removeUser = () => {
    setCurrentUser(null);
  };

    return (
      <div className="App">
        <NavBar />
        <UserLogin
          id="userLogin"
          setUser={setUser}
          removeUser={removeUser}
          currentUser={currentUser}
        />
        <Router>
          <Home path="/" user={currentUser} />
          <Topics path="/topics" user={currentUser} />
          <Articles path="/articles/topic/:topicSlug" user={currentUser} />
          <SingleArticle path="/articles/:article_id" user={currentUser} />
          {currentUser && (
            <PostArticle
              path="/users/:username/postarticle"
              user={currentUser}
            />
          )}
          <WrongTurn default path="/error" />
          <UserPage path="/users/:username" user={currentUser} />
          <SignUp path="/signUp" currentUser={currentUser} />
        </Router>
      </div>
    );
}
