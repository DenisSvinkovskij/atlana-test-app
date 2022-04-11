import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
});
