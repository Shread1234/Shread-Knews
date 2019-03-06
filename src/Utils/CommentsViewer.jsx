import React from 'react';
import { Link } from '@reach/router';

export default function CommentsViewer(props) {
  const { comments } = props;

  return (
    <ul>
      {comments !== null &&
        comments.map((comment) => (
          <div key={comment.id}>
            <li id="commentsList">
              <Link to={`/users/${comment.author}`}>{comment.author}</Link>
            </li>
            <br />
            <li id="commentsList">{comment.body}</li>
            <br />
          </div>
        ))}
    </ul>
  );
}
