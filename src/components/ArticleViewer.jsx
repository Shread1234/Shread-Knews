import React from 'react';
import { Link } from '@reach/router';

export default function ArticleViewer(props) {
  const { articles } = props;

  return (
    <ul className="articleViewer">
      {articles &&
        articles.map((article) => (
          <div id="allArticles" key={article.article_id}>
            <Link
              className="link"
              id="linkArticleTitle"
              to={`/articles/${article.article_id}`}
            >
              {article.title}
            </Link>
            <li className="articlePrev">
              {article.body.slice(0, 110) + '...'}
            </li>
            <br />
            <li className="articlePrev">
              By:{' '}
              <Link
                className="link"
                id="toArticleAuth"
                to={`/users/${article.author}`}
              >
                {article.author}
              </Link>{' '}
              &nbsp; Posted: {new Date(article.created_at).toUTCString()}
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
