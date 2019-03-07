import React from 'react';
import { Link } from '@reach/router';

export default function CommentsViewer(props) {
  const { comments } = props;

  return (
    <ul>
      <h3>Comments</h3>
      {comments !== null &&
        comments.map((comment) => (
          <div key={comment.comment_id}>
            <li id="commentsList">
              <Link to={`/users/${comment.author}`}>{comment.author}</Link>{' '}
              &nbsp; Votes: {comment.votes} &nbsp; Posted:{' '}
              {new Date(comment.created_at).toUTCString()}
            </li>
            <br />
            <li id="commentsList">{comment.body}</li>
            <br />
          </div>
        ))}
    </ul>
  );
}
