import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import {
  getAllArticles,
  allArticlesOrder,
  topicArticlesOrder
} from '../Utils/Axios';
import ArticleViewer from '../Utils/ArticleViewer';
import ArticleOrder from '../components/ArticleOrder';

export default class Articles extends React.Component {
  state = {
    articles: null,
    articleOrder: null
  };

  componentDidMount() {
    const { topicSlug } = this.props;
    getAllArticles(topicSlug).then(({ data }) =>
      this.setState({ articles: data.articles })
    );
  }

  changeOrder = (event) => {
    const value = event.target.value;
    const topic = this.props.topicSlug;
    topic
      ? topicArticlesOrder(value, topic).then(({ data }) =>
          this.setState({ articles: data.articles })
        )
      : allArticlesOrder(value).then(({ data }) =>
          this.setState({ articles: data.articles })
        );
  };

  render() {
    const { articles } = this.state;
    const { topicSlug } = this.props;
    return (
      <div className="Articles">
        <NavBar id="navBar" />
        <h1 id="allArticlesTitle">
          {topicSlug ? `Articles on ${topicSlug}` : 'All Articles'}
        </h1>
        <UserLogin />
        <ArticleOrder changeOrder={this.changeOrder} />
        <br />
        <ArticleViewer articles={articles} />
      </div>
    );
  }
}
