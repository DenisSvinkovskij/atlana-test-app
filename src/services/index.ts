import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
});
