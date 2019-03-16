import React from 'react';
import { userArticles, allArticlesOrder } from '../Utils/api';
import ArticleViewer from './ArticleViewer';
import Spinner from 'react-spinkit';
import ArticleOrder from './ArticleOrder';

export default class UserPage extends React.Component {
  state = {
    articles: null,
    loading: true,
    noArticles: false
  };

  componentDidMount() {
    userArticles(this.props.username).then(({ data }) => {
      if (data.articles.length === 0)
        return this.setState({ noArticles: true, loading: false });
      this.setState({ articles: data.articles, loading: false });
    });
  }

  changeOrder = (event) => {
    const { username } = this.props;
    const value = event.target.value;
    allArticlesOrder(value, username).then(({ data }) =>
      this.setState({
        articles: data.articles
      })
    );
  };

  render() {
    const { username } = this.props;
    const { articles, loading, noArticles } = this.state;
    return (
      <div>
        <br />
        <h1 id="userArticlesName">{`${username}'s Articles`}</h1>
        <div id="userArticles">
          {noArticles && <h2 id="noUserArticles">No Articles Found</h2>}
          {loading && (
            <Spinner name="cube-grid" color="rgb(80, 96, 112)" id="spinner" />
          )}
          {!noArticles && <ArticleOrder changeOrder={this.changeOrder} />}
          {!loading && <ArticleViewer articles={articles} />}
        </div>
      </div>
    );
  }
}
