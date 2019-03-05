import React from 'react';

export default function ArticleViewer(props) {
  const { articles } = props;
  return (
    <ul>
      {articles !== null &&
        articles.map((article) => (
          <div key={article.article_id}>
            <h3>{article.title}</h3>
            <li className="articlePrev">
              {article.body.slice(0, 110) + '...'}
            </li>
            <br />
            <li className="articlePrev">
              By: {article.author} &nbsp; Created: {article.created_at}
            </li>
            <br />
            <li className="articlePrev">
              Votes: {article.votes} &nbsp; Comments: {article.comment_count}
            </li>
            <br />
          </div>
        ))}
    </ul>
  );
}
