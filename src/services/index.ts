import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
});
