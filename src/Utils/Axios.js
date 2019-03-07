import axios from 'axios';

const baseURL = 'http://shread-knews.herokuapp.com/api/';

export function getAllArticles(topicSlug) {
  return topicSlug === undefined
    ? axios.get(`${baseURL}articles`)
    : axios.get(`${baseURL}articles?topic=${topicSlug}`);
}

export function getAllTopics() {
  return axios.get(`${baseURL}topics`);
}

export function getArticleById(article_id) {
  return axios.get(`${baseURL}articles/${article_id}`);
}

export function getCommentsByArticle(article_id) {
  return axios.get(`${baseURL}articles/${article_id}/comments`);
}

const sort_by = {
  'Oldest-Newest': 'sort_by=created_at&order=asc',
  'Newest-Oldest': 'sort_by=created_at&order=desc',
  'Comments Descending': 'sort_by=comment_count&order=desc',
  'Comments Ascending': 'sort_by=comment_count&order=asc',
  'Votes Descending': 'sort_by=votes&order=desc',
  'Votes Ascending': 'sort_by=votes&order=asc'
};

export function allArticlesOrder(value) {
  return axios.get(`${baseURL}articles?${sort_by[value]}`);
}

export function topicArticlesOrder(value, topic) {
  return axios.get(
    `${baseURL}articles?topic=${topic}&sort_by=${sort_by[value]}`
  );
}

export function userCheck(user) {
  return axios.get(`${baseURL}users/${user}`);
}
