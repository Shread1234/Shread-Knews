import React from 'react';

export default function PostComment({ author, articleId, handleAddComment }) {
  return (
    <div>
      <form id="addComment" onSubmit={handleAddComment}>
        <p id="addCommentTitle">Add A Comment</p>
        <textarea
          id="addCommentText"
          rows="3"
          cols="45"
          placeholder="Be Constructive!"
          required
        />
        <br />
        <button
          type="submit"
          form="addComment"
          className="button"
          id="addCommentButton"
        >
          Add
        </button>
      </form>
    </div>
  );
}
