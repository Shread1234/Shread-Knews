import React from 'react';
import { getAllTopics } from '../Utils/api';
import TopicViewer from './TopicViewer';
import Spinner from 'react-spinkit';

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
        <h1 id="allTopicsTitle">Topics</h1>
        {loading && (
          <>
            {' '}
            <h2 id="topicsLoading">Topics Loading</h2>{' '}
            <div id="loadingSpinner">
              <Spinner name="cube-grid" color="rgb(80, 96, 112)" id="spinner" />
            </div>
          </>
        )}{' '}
        <TopicViewer topics={topics} />
      </div>
    );
  }
}
