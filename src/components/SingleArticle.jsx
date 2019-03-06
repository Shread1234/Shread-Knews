import React from 'react';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import { getArticleById } from '../Utils/Axios';
import SingleArticleViewer from '../Utils/SingleArticleViewer';

export default class SingleArticle extends React.Component {
  state = {
    currentArticle: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    getArticleById(article_id).then(({ data }) =>
      this.setState({ currentArticle: data.article })
    );
  }

  render() {
    const { currentArticle } = this.state;
    return (
      <div className="singleArticle">
        <NavBar id="navBar" />
        <UserLogin />
        <SingleArticleViewer article={currentArticle} />
      </div>
    );
  }
}
