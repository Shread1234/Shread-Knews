import React from 'react';

export default function PostArticleForm({
  selectedTopic,
  topics,
  addArticle,
  formChange
}) {
  return (
    <div id="postArticleForm">
      <form className="newArticle" onSubmit={addArticle}>
        <br />
        <p className="postArticleWording">Title*</p>{' '}
        <input id="articleTitle" required onChange={formChange} />
        <br />
        <br />
        <p className="postArticleWording">Topic*</p>
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
            <p className="postArticleWording">Topic Name*</p>
            <input
              onChange={formChange}
              type="text"
              id="newTopicSlug"
              required
            />{' '}
            &nbsp; <p className="postArticleWording">Description*</p>
            <input onChange={formChange} id="newTopicDescription" required />
          </div>
        )}
        <br />
        <br />
        <p className="postArticleWording">Article Body*</p>
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
        className="button"
        form="newArticle"
        onClick={addArticle}
        id="postArticleButton"
      >
        Add Article
      </button>
    </div>
  );
}
