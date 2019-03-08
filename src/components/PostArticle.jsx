import React from 'react';
import { getAllTopics, postArticle, addTopic } from '../Utils/Axios';
import PostArticleForm from '../Utils/PostArticleForm';
import { navigate } from '@reach/router';

export default class PostArticle extends React.Component {
  state = {
    topics: null,
    selectedTopic: '',
    articleTitle: '',
    articleBody: '',
    author: this.props.user,
    newTopicSlug: '',
    newTopicDescription: ''
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

    if (topic === 'New Topic') {
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
    const { topics, selectedTopic } = this.state;
    return (
      <PostArticleForm
        topics={topics}
        selectTopic={this.selectTopic}
        selectedTopic={selectedTopic}
        addArticle={this.addArticle}
        formChange={this.formChange}
      />
    );
  }
}
