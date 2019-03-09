import React from 'react';
import { getCommentsByArticle } from '../Utils/api';
import CommentsViewer from './CommentsViewer';

export default class Comments extends React.Component {
  state = {
    comments: null
  };

  getComments = () => {
    getCommentsByArticle(this.props.article_id).then(({ data }) =>
      this.setState({ comments: data.comments })
    );
  };
  componentDidMount() {
    this.getComments();
  }

  addedComment = () => {
    this.getComments();
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="Comments">
        {comments === null && <h3>No Comments Yet</h3>}
        {comments !== null && (
          <CommentsViewer comments={comments} user={this.props.user} />
        )}
      </div>
    );
  }
}
