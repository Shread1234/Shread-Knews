import axios from 'axios';

const baseURL = 'http://shread-knews.herokuapp.com/api/';

export function getAllArticles() {
  return axios.get(`${baseURL}articles`);
}

export function getAllTopics() {
  return axios.get(`${baseURL}topics`);
}
