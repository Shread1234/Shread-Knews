import React from 'react';

export default function ArticleOrder(props) {
  return (
    <div id="articleSort">
      <h4 id="sortByTitle">SORT</h4>
      <select id="sortSelect" onChange={props.changeOrder}>
        <option />
        <option value="Oldest-Newest">Oldest-Newest</option>
        <option value="Newest-Oldest">Newest-Oldest</option>
        <option value="Comments Descending">Comments Descending</option>
        <option value="Comments Ascending">Comments Ascending</option>
        <option value="Votes Descending">Votes Descending</option>
        <option value="Votes Ascending">Votes Ascending</option>
      </select>
    </div>
  );
}
