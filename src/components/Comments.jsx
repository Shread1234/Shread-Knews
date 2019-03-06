import React from 'react';
import { getCommentsByArticle } from '../Utils/Axios';
import CommentsViewer from '../Utils/CommentsViewer';

export default class Comments extends React.Component {
  state = {
    comments: null
  };

  componentDidMount() {
    getCommentsByArticle(this.props.article_id).then(({ data }) =>
      this.setState({ comments: data.comments })
    );
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="Comments">
        <CommentsViewer comments={comments} />
      </div>
    );
  }
}
