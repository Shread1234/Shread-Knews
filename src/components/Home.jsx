import React from 'react';

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
        <br />
        <br />
        <br />
        <h1 id="homeTitle">Shread Knews</h1>
      </div>
    );
  }
}
