import React from 'react';

export default function PostArticleForm({
  selectedTopic,
  topics,
  selectTopic,
  addArticle
}) {
  return (
    <div>
      <form className="newArticle" onSubmit={addArticle}>
        <br />
        Title: <input id="postArticleTitle" />
        <br />
        <br />
        Topic: &nbsp;{' '}
        <select onChange={selectTopic}>
          <option value="" />
          {topics !== null &&
            topics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          <option value="New Topic">New Topic</option>
        </select>
        {selectedTopic === 'New Topic' && (
          <input type="text" id="newTopicInput" />
        )}
        <br />
        <br />
        Article Body:
        <br />
        <textarea rows="20" cols="30" id="newArticlebody" />
      </form>
      <button
        id="postNewArticle"
        form="newArticle"
        type="submit"
        onClick={addArticle}
      >
        Add Article
      </button>
    </div>
  );
}
