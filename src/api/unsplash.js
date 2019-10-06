import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}`,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
  }
});
