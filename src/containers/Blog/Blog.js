import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import wp from '../../axios-wordpress'
import Spinner from '../../components/Spinner/Spinner'
import { Row, Col, Button } from 'react-materialize'
import Select from '../../components/Select/Select'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import englishString from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import qs from 'query-string'
class Blog extends Component {
  state = {
    posts: [],
    page: 1,
    hasMorePosts: false,
  }

  componentDidMount() {
    const { history } = this.props
    const { location } = history

    this.setState(qs.parse(location.search), () => {
      this.fetchPosts()
    })

    window.scrollTo({
      top: document.body.getBoundingClientRect().top - 64,
    })
  }

  fetchPosts = () => {
    const { page, order, tags } = this.state

    wp.get(`posts?_embed&page=${page}&order=${order}&order_by=date&tags=${tags}`).then(
      ({ data: newPosts, headers }) => {
        this.setState(({ posts, page }) => {
          return {
            posts: [...posts, ...newPosts],
            page: page + 1,
            hasMorePosts: posts.length + newPosts.length !== parseInt(headers['x-wp-total']),
          }
        })
      }
    )
  }

  render() {
    const { posts, hasMorePosts, tags, order } = this.state
    const {
      t,
      history: { goBack },
    } = this.props

    if (!tags || !order) {
      return <Spinner />
    }

    return (
      <>
        <Row>
          <Col>
            <Button
              className="white blue-text text-darken-3"
              flat
              large
              waves="light"
              onClick={goBack}
              style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Icon
                path={mdiArrowLeft}
                size="1.3rem"
                color="#1565C0"
                style={{ transform: 'translateX(-35%)' }}
              />
              {t('common:tornaIndietro')}
            </Button>
          </Col>
          <Select
            label="Filtra per categoria"
            value={this.state.tags}
            onChange={({ target: { value } }) => {
              const { history } = this.props
              const { location } = history

              this.setState(
                {
                  page: 1,
                  posts: [],
                  tags: value,
                },
                () => {
                  this.fetchPosts()
                  history.replace({
                    ...location,
                    search: `tags=${this.state.tags}&order=${this.state.order}`,
                  })
                }
              )
            }}>
            <option value="3,4">Tutte le categorie</option>
            <option value="4">Didattica Digitale</option>
            <option value="3">Data Science</option>
          </Select>
          <Select
            label="Ordina per"
            value={this.state.order}
            onChange={({ target: { value } }) => {
              const { history } = this.props
              const { location } = history

              this.setState(
                {
                  page: 1,
                  posts: [],
                  order: value,
                },
                () => {
                  this.fetchPosts()
                  history.replace({
                    ...location,
                    search: `tags=${this.state.tags}&order=${this.state.order}`,
                  })
                }
              )
            }}>
            <option value="desc">Pi&uacute; recenti prima</option>
            <option value="asc">Pi&uacute; vecchi prima</option>
          </Select>
        </Row>

        <InfiniteScroll
          loadMore={this.fetchPosts}
          hasMore={hasMorePosts}
          loader={<Spinner key="loader" />}
          initialLoad={false}>
          <Row>
            {posts.map(post => {
              return (
                <Col key={post.id} s={12}>
                  <Link to={`/blog/post/${post.slug}`}>
                    <h1>{post.title.rendered}</h1>
                    <TimeAgo date={post.date} formatter={buildFormatter(englishString)} />
                    <div
                      style={{ maxHeight: '6em' }}
                      className="flow-text grey-text"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </Link>
                </Col>
              )
            })}
          </Row>
        </InfiniteScroll>
      </>
    )
  }
}

Blog.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  tReady: PropTypes.bool.isRequired,
}

export default withNamespaces()(Blog)
