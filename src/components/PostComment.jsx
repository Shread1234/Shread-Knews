import React from 'react';

export default function PostComment({ author, articleId, handleAddComment }) {
  return (
    <div>
      <form id="addComment" onSubmit={handleAddComment}>
        <p>Add A Comment</p>
        <textarea rows="3" cols="45" placeholder="Be Nice!" />
        <button type="submit" form="addComment">
          Add
        </button>
      </form>
    </div>
  );
}
