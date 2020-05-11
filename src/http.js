import axios from 'axios'

const http = axios.create({
  baseURL: window.SITE_CONFIG['api'],
});

export default http;