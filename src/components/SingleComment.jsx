import React from 'react';
import { Link } from '@reach/router';
import { commentVote } from '../Utils/Axios';

export default class SingleComment extends React.Component {
  state = {
    voteChange: 0
  };

  handleVoteChange = (event) => {
    const vote = Number(event.target.value);
    const commentId = Number(event.target.parentNode.parentNode.firstChild.id);
    commentVote(commentId, vote);
    this.setState((prevState) => {
      return {
        voteChange: prevState.voteChange + vote
      };
    });
  };

  render() {
    const { comment, user } = this.props;
    const { voteChange } = this.state;
    return (
      <div key={comment.comment_id}>
        <li id={comment.comment_id} className="commentsList">
          <Link to={`/users/${comment.author}`}>{comment.author}</Link> &nbsp;
          Votes: {comment.votes + voteChange} &nbsp; Posted:{' '}
          {new Date(comment.created_at).toUTCString()}
        </li>
        <br />
        <li id="commentsList">{comment.body}</li>
        <br />
        {user && (
          <div>
            <button
              id="commentUpVote"
              value="1"
              onClick={this.handleVoteChange}
              disabled={voteChange === 1}
            >
              Up Vote
            </button>
            <button
              id="commentDownVote"
              value="-1"
              onClick={this.handleVoteChange}
              disabled={voteChange === -1}
            >
              Down Vote
            </button>
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}