import React from 'react';
import { Link } from '@reach/router';
import Comments from '../components/Comments';
import { articleVote, removeArticle, postComment } from '../Utils/api';
import PostComment from '../components/PostComment';
import { navigate } from '@reach/router/lib/history';

export default class SingleArticleViewer extends React.Component {
  state = {
    voteChange: 0,
    articleRemoved: false,
    commentAdded: false,
    addedComment: null
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
    setTimeout(() => navigate('/'), 1200);
  };

  handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target[0].value;
    const author = this.props.user;
    const articleId = this.props.article.article_id;
    event.target.reset();
    postComment(comment, author, articleId).then(({ data }) => {
      this.setState({ commentAdded: true, addedComment: data.comment });
      setTimeout(() => this.setState({ commentAdded: false }), 2000);
    });
  };

  render() {
    const { article, user } = this.props;
    const {
      voteChange,
      articleRemoved,
      commentAdded,
      addedComment
    } = this.state;

    if (articleRemoved) return <h1 id="articleDeleted">Article Deleted!</h1>;

    return (
      <ul id="singleArticle">
        {article !== null && (
          <div id="singleArticleDiv" key={article.article_id}>
            <h1 id="singleArticleTitle">{article.title}</h1>

            <div id="singleArticleBody">
              By:{' '}
              <Link className="link" to={`/users/${article.author}`}>
                {' '}
                {article.author}
              </Link>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>Posted: {new Date(article.created_at).toUTCString()}</p>{' '}
              <p>
                Topic:{' '}
                <Link className="link" to={`/articles/topic/${article.topic}`}>
                  {article.topic}
                </Link>
              </p>
              <p>{article.body}</p>
              <p>
                <br />
                Comments: {article.comment_count} &nbsp; Votes:{' '}
                {article.votes + voteChange}
              </p>
              {user && (
                <div>
                  <button
                    id="upVote"
                    disabled={voteChange === 1}
                    onClick={this.handleVoteChange}
                    className="button"
                    value="1"
                  >
                    Up Vote
                  </button>
                  <button
                    id="downVote"
                    disabled={voteChange === -1}
                    onClick={this.handleVoteChange}
                    className="button"
                    value="-1"
                  >
                    Down Vote
                  </button>
                </div>
              )}
            </div>
            {user === article.author && (
              <button
                id="deleteArticle"
                className="button"
                onClick={this.handleDelete}
              >
                Delete Article
              </button>
            )}
            {commentAdded && <p id="addedComment">Comment Added!</p>}
            {user && <PostComment handleAddComment={this.handleAddComment} />}
            <Comments
              addedComment={addedComment}
              user={user}
              article_id={article.article_id}
            />
          </div>
        )}
      </ul>
    );
  }
}
