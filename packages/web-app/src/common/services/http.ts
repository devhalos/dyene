import axios from 'axios';

const client = axios.create({
  // TODO: move to config
  baseURL: '/data',
});

export default client;
