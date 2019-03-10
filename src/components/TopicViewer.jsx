import React from 'react';
import { Link } from '@reach/router';

export default function TopicViewer(props) {
  const { topics } = props;
  return (
    <ul id="topicsViewer">
      {topics !== null &&
        topics.map((topic) => (
          <div key={topic.slug}>
            <Link className="link" to={`/articles/topic/${topic.slug}`}>
              {topic.slug}
            </Link>
            <p>{topic.description}</p>
            <br />
          </div>
        ))}
    </ul>
  );
}
