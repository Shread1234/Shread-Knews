import React from 'react';
import {
  getAllArticles,
  allArticlesOrder,
  topicArticlesOrder
} from '../Utils/api';
import ArticleViewer from './ArticleViewer';
import ArticleOrder from '../components/ArticleOrder';
import { Link } from '@reach/router';

export default class Articles extends React.Component {
  state = {
    articles: null,
    loading: true
  };

  getArticles = () => {
    const { topicSlug } = this.props;
    getAllArticles(topicSlug).then(({ data }) =>
      this.setState({
        articles: data.articles,
        loading: false
      })
    );
  };

  componentDidMount() {
    this.getArticles();
  }

  componentWillReceiveProps() {}

  changeOrder = (event) => {
    const value = event.target.value;
    const { topicSlug } = this.props;
    topicSlug
      ? topicArticlesOrder(value, topicSlug).then(({ data }) =>
          this.setState({
            articles: data.articles
          })
        )
      : allArticlesOrder(value).then(({ data }) =>
          this.setState({
            articles: data.articles
          })
        );
  };

  render() {
    const { articles, loading } = this.state;
    const { topicSlug, user } = this.props;
    console.log(user);
    return (
      <div className="Articles">
        <br />
        <br />
        <br />
        <h1 id="allArticlesTitle">
          {topicSlug ? `Articles on ${topicSlug}` : 'All Articles'}
        </h1>
        <ArticleOrder changeOrder={this.changeOrder} />
        <br />
        {user !== null && user.length > 0 && (
          <Link className="link" to={`/users/${user}/postarticle`}>
            <button className="button">Post New Article</button>
          </Link>
        )}
        {loading && <h2>Articles Loading</h2>}
        <ArticleViewer articles={articles} />
      </div>
    );
  }
}
