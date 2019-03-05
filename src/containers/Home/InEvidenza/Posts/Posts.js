import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import wp from '../../../../axios-wordpress'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner/Spinner'
import Fade from 'react-reveal/Fade'

import PostCard from 'components/PostCard/PostCard'
class Posts extends Component {
  state = {
    posts: null,
  }

  componentDidMount() {
    wp.get('posts?_embed&order=desc&order_by=date&per_page=3').then(res => {
      this.setState({
        posts: res.data,
      })
    })
  }

  renderPosts() {
    const { posts } = this.state

    if (!posts) {
      return <Spinner />
    }

    return (
      posts && (
        <Fade cascade left>
          <div>
            {posts.map((post, index) => {
              return (
                <Col s={12} l={12} xl={4} key={index}>
                  <PostCard post={post} />
                </Col>
              )
            })}
          </div>
        </Fade>
      )
    )
  }

  render() {
    return <Row>{this.renderPosts()}</Row>
  }
}

Posts.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces()(Posts)
