import React from 'react';
import { Link } from '@reach/router';
import Comments from '../components/Comments';
import { articleVote, removeArticle } from '../Utils/Axios';

export default class SingleArticleViewer extends React.Component {
  state = {
    voteChange: 0,
    articleRemoved: false
  };

  handleVoteChange = (event) => {
    const articleId = this.props.article.article_id;
    const vote = Number(event.target.value);
    articleVote(articleId, vote);
    this.setState((prevState) => {
      return {
        voteChange: prevState.voteChange + vote
      };
    });
  };

  handleDelete = () => {
    const articleId = this.props.article.article_id;
    removeArticle(articleId);
    this.setState({ articleRemoved: true });
  };

  render() {
    const { article, user } = this.props;
    const { voteChange, articleRemoved } = this.state;

    if (articleRemoved) return <h1>Article Deleted!</h1>;

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
              <Link to={`/articles/topic/${article.topic}`}>
                {article.topic}
              </Link>
              <p>{article.body}</p>
              <p>
                Comments: {article.comment_count} &nbsp; Votes:{' '}
                {article.votes + voteChange}
              </p>
              {user && (
                <div>
                  <button
                    disabled={voteChange === 1}
                    onClick={this.handleVoteChange}
                    id="articleUpVote"
                    value="1"
                  >
                    Up Vote
                  </button>
                  <button
                    disabled={voteChange === -1}
                    onClick={this.handleVoteChange}
                    id="articleDownVote"
                    value="-1"
                  >
                    Down Vote
                  </button>
                </div>
              )}
              {user === article.author && (
                <button id="deleteArticle" onClick={this.handleDelete}>
                  Delete Article
                </button>
              )}
              <br />
              <Comments user={user} article_id={article.article_id} />
            </div>
          ))}
      </ul>
    );
  }
}
