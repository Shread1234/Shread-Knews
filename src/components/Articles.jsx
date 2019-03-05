import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';

export default class Articles extends React.Component {
  state = {
    articleView: ''
  };

  componentDidMount() {}

  render() {
    return (
      <div className="Articles">
        <NavBar id="navBar" />
        <h1 id="allArticlesTitle">Articles</h1>
        <UserLogin />
      </div>
    );
  }
}
