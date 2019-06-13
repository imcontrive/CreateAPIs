import axios from 'axios';

export default function setAuthToken(token) {
  console.log(token)
  if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(axios.defaults.headers)
  } else {
      axios.defaults.headers.common['Authorization'] = null;
  }
}