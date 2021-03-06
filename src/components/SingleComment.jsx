import React from 'react';
import { Link } from '@reach/router';
import { commentVote, removeComment } from '../Utils/api';

export default class SingleComment extends React.Component {
  state = {
    voteChange: 0,
    commentRemoved: false
  };

  handleVoteChange = (event) => {
    const vote = Number(event.target.value);
    const commentId = Number(this.props.comment.comment_id);
    commentVote(commentId, vote);
    this.setState((prevState) => {
      return {
        voteChange: prevState.voteChange + vote
      };
    });
  };

  handleDelete = () => {
    const commentId = Number(this.props.comment.comment_id);
    removeComment(commentId);
    this.setState({ commentRemoved: true });
  };

  render() {
    const { comment, user } = this.props;
    const { voteChange, commentRemoved } = this.state;

    if (commentRemoved) return <h2 id="commentRemoved">Comment Deleted!</h2>;
    return (
      <div key={comment.comment_id} id="singleComment">
        <li id={comment.comment_id} className="commentsList">
          <Link className="link" to={`/users/${comment.author}`}>
            {comment.author}
          </Link>{' '}
          &nbsp; Votes: {comment.votes + voteChange} &nbsp; Posted:{' '}
          {new Date(comment.created_at).toUTCString()}
        </li>
        <br />
        <li id="commentsList">{comment.body}</li>
        <br />
        {user && (
          <div>
            <button
              id="upVote"
              className="button"
              value="1"
              onClick={this.handleVoteChange}
              disabled={voteChange === 1}
            >
              Up Vote
            </button>
            <button
              id="downVote"
              className="button"
              value="-1"
              onClick={this.handleVoteChange}
              disabled={voteChange === -1}
            >
              Down Vote
            </button>
            {user === comment.author && (
              <button
                id="downVote"
                className="button"
                onClick={this.handleDelete}
              >
                Delete Comment
              </button>
            )}
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}
