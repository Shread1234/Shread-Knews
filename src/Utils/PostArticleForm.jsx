import React from 'react';

export default function PostArticleForm({
  selectedTopic,
  topics,
  selectTopic,
  addArticle,
  formChange
}) {
  return (
    <div>
      <form className="newArticle" onSubmit={addArticle}>
        <br />
        Title: <input id="articleTitle" required onChange={formChange} />
        <br />
        <br />
        Topic: &nbsp;{' '}
        <select required onChange={formChange} id="selectedTopic">
          <option />
          {topics !== null &&
            topics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          <option value="New Topic" onChange={formChange}>
            New Topic
          </option>
        </select>
        {selectedTopic === 'New Topic' && (
          <div>
            <br />
            Topic Name:{' '}
            <input
              onChange={formChange}
              type="text"
              id="newTopicSlug"
              required
            />{' '}
            &nbsp; Description:{' '}
            <input onChange={formChange} id="newTopicDescription" required />
          </div>
        )}
        <br />
        <br />
        Article Body:
        <br />
        <textarea
          onChange={formChange}
          rows="20"
          cols="30"
          id="articleBody"
          required
        />
      </form>
      <button
        type="submit"
        id="postNewArticle"
        form="newArticle"
        onClick={addArticle}
      >
        Add Article
      </button>
    </div>
  );
}
