import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';

export default class Home extends React.Component {
  state = {
    leftArticles: '',
    mostVotes: '',
    mostRecent: '',
    mostComments: ''
  };

  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <NavBar id="navBar" />
        <br />
        <br />
        <br />
        <h1 id="homeTitle">Shread Knews</h1>
        <UserLogin />
      </div>
    );
  }
}
