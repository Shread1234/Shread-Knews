import axios from 'axios';

const baseURL = 'http://shread-knews.herokuapp.com/api/';

export default function getAllArticles() {
  return axios.get(`${baseURL}/articles`);
}
