import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import wp from '../../axios-wordpress'
import Spinner from '../../components/Spinner/Spinner'
import { Row, Col } from 'react-materialize'
class Blog extends Component {
  state = {
    items: [],
    page: 1,
    hasMorePosts: true,
  }

  fetchPosts = () => {
    wp.get(`posts?page=${this.state.page}`).then(res => {
      this.setState(prevState => {
        return {
          items: [
            ...prevState.items,
            ...res.data.map(item => {
              return (
                <Col key={item.id} s={12} m={6} xl={4}>
                  <Link to={`/blog/post/${item.slug}`}>
                    <h1>{item.title.rendered}</h1>
                    <div
                      style={{ maxHeight: '6em' }}
                      className="flow-text grey-text"
                      dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                    />
                  </Link>
                </Col>
              )
            }),
          ],
          page: prevState.page + 1,
          hasMorePosts: prevState.items.length + res.data.length != res.headers['x-wp-total'],
        }
      })
    })
  }

  render() {
    const { items } = this.state

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.fetchPosts}
        hasMore={this.state.hasMorePosts}
        loader={<Spinner key="loader" />}
        initialLoad={true}>
        <Row>{items}</Row>
      </InfiniteScroll>
    )
  }
}

Blog.propTypes = {}

export default Blog
