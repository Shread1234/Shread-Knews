import React from 'react';
import { getAllTopics, postArticle, addTopic } from '../Utils/api';
import PostArticleForm from './PostArticleForm';
import { navigate } from '@reach/router';

export default class PostArticle extends React.Component {
  state = {
    topics: null,
    selectedTopic: '',
    articleTitle: '',
    articleBody: '',
    author: this.props.user,
    newTopicSlug: '',
    newTopicDescription: '',
    error: false,
    topicError: false
  };

  componentDidMount() {
    getAllTopics().then(({ data }) => this.setState({ topics: data.topics }));
  }

  selectTopic = (event) => {
    this.setState({ selectedTopic: event.target.value });
  };

  formChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addArticle = (event) => {
    event.preventDefault();
    const newTopicSlug = this.state.newTopicSlug;
    const newTopicDescription = this.state.newTopicDescription;
    const title = this.state.articleTitle;
    const body = this.state.articleBody;
    const topic = this.state.selectedTopic;
    const author = this.props.user;
    const topicSlugs = this.state.topics.map((topic) =>
      topic.slug.toLowerCase()
    );

    if (!title) return this.setState({ error: true });
    if (!body) return this.setState({ error: true });
    if (!topic) return this.setState({ error: true });
    if (!author) return this.setState({ error: true });

    if (topic === 'New Topic') {
      if (newTopicSlug.length < 1) return this.setState({ error: true });

      if (newTopicDescription.length < 1) return this.setState({ error: true });

      if (topicSlugs.includes(newTopicSlug.toLowerCase()))
        return this.setState({ topicError: true });

      addTopic(newTopicSlug, newTopicDescription).then(
        postArticle(title, newTopicSlug, body, author).then(({ data }) =>
          navigate(`/articles/${data.article.article_id}`)
        )
      );
    } else {
      postArticle(title, topic, body, author).then(({ data }) =>
        navigate(`/articles/${data.article.article_id}`)
      );
    }
  };

  render() {
    const { topics, selectedTopic, error, topicError } = this.state;
    return (
      <div>
        <br />
        <h1>Post An Article</h1>
        {error && <p>All fields Must Be Filled In</p>}
        {topicError && <p>Topic Already Exists</p>}
        <PostArticleForm
          topics={topics}
          selectTopic={this.selectTopic}
          selectedTopic={selectedTopic}
          addArticle={this.addArticle}
          formChange={this.formChange}
        />
      </div>
    );
  }
}
