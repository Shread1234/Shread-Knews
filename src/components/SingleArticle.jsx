import React from 'react';
import { getArticleById } from '../Utils/api';
import SingleArticleViewer from './SingleArticleViewer';
import { navigate } from '@reach/router';

export default class SingleArticle extends React.Component {
  state = {
    currentArticle: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    getArticleById(article_id)
      .then(({ data }) => this.setState({ currentArticle: data.article }))
      .catch(() => {
        navigate('/error');
      });
  }

  render() {
    const { currentArticle } = this.state;
    return (
      <div className="singleArticle">
        <SingleArticleViewer article={currentArticle} user={this.props.user} />
      </div>
    );
  }
}
