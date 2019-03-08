import React from 'react';
import { getAllTopics, postArticle } from '../Utils/Axios';
import PostArticleForm from '../Utils/PostArticleForm';

export default class PostArticle extends React.Component {
  state = {
    topics: null,
    selectedTopic: ''
  };

  componentDidMount() {
    getAllTopics().then(({ data }) => this.setState({ topics: data.topics }));
  }

  selectTopic = (event) => {
    this.setState({ selectedTopic: event.target.value });
  };

  addArticle = (event) => {
    event.preventDefault();
    const title = event.target.parentNode.firstChild[0].value;
    const topic = event.target.parentNode.firstChild[1].value;
    const body = event.target.parentNode.firstChild[2].value;
    const author = this.props.user;
    postArticle(title, topic, body, author).then(({ data }) =>
      console.log(data)
    );
  };

  render() {
    const { topics, selectedTopic } = this.state;
    return (
      <PostArticleForm
        topics={topics}
        selectTopic={this.selectTopic}
        selectedTopic={selectedTopic}
        addArticle={this.addArticle}
      />
    );
  }
}
