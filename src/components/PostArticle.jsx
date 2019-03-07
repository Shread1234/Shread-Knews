import React from 'react';
import { getAllTopics } from '../Utils/Axios';

export default class PostArticle extends React.Component {
  state = {
    topics: 0
  };

  render() {
    return (
      <div>
        {getAllTopics().then(({ data }) =>
          data.topics.map((topic) => <li>{topic.slug}</li>)
        )}
        <form className="newArticle">
          <br />
          Title: <input />
          <br />
          <br />
          Topic: &nbsp;
        </form>
      </div>
    );
  }
}
