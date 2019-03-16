import React from 'react';
import {
  getAllArticles,
  allArticlesOrder,
  topicArticlesOrder
} from '../Utils/api';
import ArticleViewer from './ArticleViewer';
import ArticleOrder from '../components/ArticleOrder';
import Spinner from 'react-spinkit';

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

  componentDidUpdate(prevProps) {
    if (this.props.topicSlug !== prevProps.topicSlug) this.getArticles();
  }

  render() {
    const { articles, loading } = this.state;
    const { topicSlug } = this.props;
    return (
      <div className="Articles">
        <h1 id="allArticlesTitle">
          {topicSlug === 'all' ? 'All Articles' : `Articles on ${topicSlug}`}
        </h1>
        <ArticleOrder changeOrder={this.changeOrder} />
        {loading && (
          <div id="loadingSpinner">
            <h2 id="articlesLoading">Articles Loading</h2>
            <Spinner name="cube-grid" color="rgb(80, 96, 112)" id="spinner" />
          </div>
        )}
        <ArticleViewer articles={articles} />
      </div>
    );
  }
}
