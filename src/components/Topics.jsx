import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import { getAllTopics } from '../Utils/Axios';
import TopicViewer from '../Utils/TopicViewer';

export default class Topics extends React.Component {
  state = {
    topics: null
  };

  componentDidMount() {
    getAllTopics().then(({ data }) => this.setState({ topics: data.topics }));
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="Topics">
        <NavBar id="navBar" />
        <br />
        <br />
        <br />
        <h1 id="allTopicsTitle">Topics</h1>
        <UserLogin />
        <TopicViewer topics={topics} handleClick={this.handleClick} />
      </div>
    );
  }
}
