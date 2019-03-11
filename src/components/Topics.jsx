import React from 'react';

import { getAllTopics } from '../Utils/api';
import TopicViewer from './TopicViewer';

export default class Topics extends React.Component {
  state = {
    topics: null,
    loading: true
  };

  componentDidMount() {
    getAllTopics().then(({ data }) =>
      this.setState({ topics: data.topics, loading: false })
    );
  }

  render() {
    const { topics, loading } = this.state;
    return (
      <div className="Topics">
        <br />
        <br />
        <br />
        <h1 id="allTopicsTitle">Topics</h1>
        {loading && <h2>Topics Loading</h2>}
        <TopicViewer topics={topics} />
      </div>
    );
  }
}
