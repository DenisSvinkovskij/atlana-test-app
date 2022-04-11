import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
  },
});
console.log(process.env);
