import React from 'react'

import { Route, withRouter } from 'react-router-dom'
import Post from './Post/Post'

const Blog = () => {
  return <Route path="/blog/post/:postSlug" component={Post} />
}

Blog.propTypes = {}

export default withRouter(Blog)
