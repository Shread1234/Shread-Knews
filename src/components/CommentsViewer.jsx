import React from 'react';
import SingleComment from './SingleComment';

export default function CommentsViewer(props) {
  const { comments, user } = props;
  return (
    <div>
      <ul>
        <h3>Comments</h3>
        {comments !== null &&
          comments.map((comment) => (
            <SingleComment
              comment={comment}
              user={user}
              key={comment.comment_id}
            />
          ))}
      </ul>
    </div>
  );
}
