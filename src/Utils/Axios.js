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
