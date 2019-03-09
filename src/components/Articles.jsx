import React from 'react';
import {
  getAllArticles,
  allArticlesOrder,
  topicArticlesOrder
} from '../Utils/Axios';
import ArticleViewer from './ArticleViewer';
import ArticleOrder from '../components/ArticleOrder';
import { Link } from '@reach/router';

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
    const { topicSlug, user } = this.props;
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
        {user !== null && (
          <Link className="link" to={`/users/${user}/postarticle`}>
            <button className="button">Post New Article</button>
          </Link>
        )}
        <ArticleViewer articles={articles} />
      </div>
    );
  }
}
