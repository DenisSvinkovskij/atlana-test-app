import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token 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`,
  },
});
