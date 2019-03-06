import React from 'react';
import { Link } from '@reach/router';
import Comments from '../components/Comments';

export default function SingleArticleViewer(props) {
  const { article } = props;
  return (
    <ul>
      {article !== null &&
        [article].map((article) => (
          <div key={article.article_id}>
            <br />
            <h1>{article.title}</h1>
            <br />
            By: <Link to={`/users/${article.author}`}>
              {' '}
              {article.author}
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;Posted: {article.created_at}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Topic:{' '}
            <Link to={`/articles/topic/${article.topic}`}>{article.topic}</Link>
            <p>{article.body}</p>
            <br />
            <Comments article_id={article.article_id} />
          </div>
        ))}
    </ul>
  );
}
