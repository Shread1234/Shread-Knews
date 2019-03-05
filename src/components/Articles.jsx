import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import { getAllArticles } from '../Utils/Axios';
import ArticleViewer from '../Utils/ArticleViewer';

export default class Articles extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    const { topicSlug } = this.props;
    getAllArticles(topicSlug).then(({ data }) =>
      this.setState({ articles: data.articles })
    );
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="Articles">
        <NavBar id="navBar" />
        <h1 id="allArticlesTitle">Articles</h1>
        <UserLogin />
        <ArticleViewer articles={articles} />
      </div>
    );
  }
}
