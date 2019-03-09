import React from 'react';
import { Link } from '@reach/router';
import Comments from '../components/Comments';
import { articleVote, removeArticle, postComment } from '../Utils/api';
import PostComment from '../components/PostComment';

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
  };

  handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target[0].value;
    const author = this.props.user;
    const articleId = this.props.article.article_id;

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

    if (articleRemoved) return <h1>Article Deleted!</h1>;

    return (
      <ul>
        {article !== null && (
          <div key={article.article_id}>
            <br />
            <br />
            <br />
            <h1>{article.title}</h1>
            <br />
            By:{' '}
            <Link className="link" to={`/users/${article.author}`}>
              {' '}
              {article.author}
            </Link>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;Posted:{' '}
            {new Date(article.created_at).toUTCString()}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Topic:{' '}
            <Link className="link" to={`/articles/topic/${article.topic}`}>
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
                  className="button"
                  value="1"
                >
                  Up Vote
                </button>
                <button
                  disabled={voteChange === -1}
                  onClick={this.handleVoteChange}
                  className="button"
                  value="-1"
                >
                  Down Vote
                </button>
              </div>
            )}
            {user === article.author && (
              <button className="button" onClick={this.handleDelete}>
                Delete Article
              </button>
            )}
            <br />
            {commentAdded && <p>Comment Added!</p>}
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
