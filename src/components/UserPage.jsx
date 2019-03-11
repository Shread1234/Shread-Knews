import React from 'react';
import { Link } from '@reach/router';
import { userArticles } from '../Utils/api';
import ArticleViewer from './ArticleViewer';

export default class UserPage extends React.Component {
  state = {
    articles: null,
    loading: true
  };

  componentDidMount() {
    userArticles(this.props.username).then(({ data }) =>
      this.setState({ articles: data.articles, loading: false })
    );
  }

  render() {
    const { username } = this.props;
    const { articles, loading } = this.state;
    return (
      <div>
        <h2>{`${username}'s Articles`}</h2>
        <div id="userArticles">
          {!loading && <ArticleViewer articles={articles} />}
        </div>
      </div>
    );
  }
}
