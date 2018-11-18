import axios from 'axios'
const { REACT_APP_WORDPRESS_URL } = process.env

const instance = axios.create({
  baseURL: `${REACT_APP_WORDPRESS_URL}/wp-json/wp/v2/`,
})

export default instance
