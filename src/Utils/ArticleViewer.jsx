import React from 'react';
import { Link } from '@reach/router';

export default function ArticleViewer(props) {
  const { articles } = props;

  return (
    <ul>
      {articles !== null &&
        articles.map((article) => (
          <div key={article.article_id}>
            <Link id="linkArticleTitle" to={`/articles/${article.article_id}`}>
              {article.title}
            </Link>
            <li className="articlePrev">
              {article.body.slice(0, 110) + '...'}
            </li>
            <br />
            <li className="articlePrev">
              By: {article.author} &nbsp; Posted:{' '}
              {new Date(article.created_at).toUTCString()}
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
