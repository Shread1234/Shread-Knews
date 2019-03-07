import React from 'react';
import { Link } from '@reach/router';
import Comments from '../components/Comments';

export default function SingleArticleViewer(props) {
  const { article, user } = props;
  return (
    <ul>
      {article !== null &&
        [article].map((article) => (
          <div key={article.article_id}>
            <br />
            <br />
            <br />
            <h1>{article.title}</h1>
            <br />
            By: <Link to={`/users/${article.author}`}>
              {' '}
              {article.author}
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;Posted:{' '}
            {new Date(article.created_at).toUTCString()}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Topic:{' '}
            <Link to={`/articles/topic/${article.topic}`}>{article.topic}</Link>
            <p>{article.body}</p>
            <p>
              Comments: {article.comment_count} &nbsp; Votes: {article.votes}
            </p>
            {user && (
              <div>
                <button id="articleUpVote">Up Vote</button>
                <button id="articleDownVote">Down Vote</button>
              </div>
            )}
            <br />
            <Comments article_id={article.article_id} />
          </div>
        ))}
    </ul>
  );
}
