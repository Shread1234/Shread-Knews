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

  componentDidUpdate(nextProps) {
    const { comments } = this.state;

    if (nextProps.addedComment === null) return;

    if (comments === null)
      return this.setState({ comments: [nextProps.addedComment] });

    if (comments[0].comment_id !== nextProps.addedComment.comment_id)
      this.setState({
        comments: [nextProps.addedComment, ...this.state.comments]
      });
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="Comments">
        {comments === null && <h3 id="noCommentsTitle">No Comments Yet</h3>}
        {comments !== null && (
          <CommentsViewer comments={comments} user={this.props.user} />
        )}
      </div>
    );
  }
}
