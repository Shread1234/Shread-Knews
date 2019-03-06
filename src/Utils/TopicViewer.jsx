import React from 'react';
import { Link } from '@reach/router';

export default function TopicViewer(props) {
  const { topics } = props;
  return (
    <ul>
      {topics !== null &&
        topics.map((topic) => (
          <div key={topic.slug}>
            <Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>
            <h4>{topic.description}</h4>
            <br />
          </div>
        ))}
    </ul>
  );
}
