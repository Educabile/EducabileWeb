import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import wp from '../../axios-wordpress'
import Spinner from 'components/Spinner/Spinner'
import { Row, Col, Button } from 'react-materialize'
import Select from 'components/Select/Select'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Slide from 'react-reveal/Slide'
import PostCard from 'components/PostCard/PostCard'
import { scrollTo } from 'libs/utils'
import { Helmet } from 'react-helmet'

class Blog extends Component {
  state = {
    posts: [],
    page: 1,
    hasMorePosts: false,
  }

  componentDidMount() {
    const { history } = this.props
    const {
      location: { search },
    } = history

    this.setFilter(qs.parse(search))
  }

  fetchPosts = () => {
    const { page, order, tags } = this.state

    wp.get(`posts?_embed&page=${page}&order=${order}&order_by=date&tags=${tags}&per_page=12`).then(
      ({ data: newPosts, headers }) => {
        this.setState(({ posts, page }) => ({
          posts: posts.concat(...newPosts),
          page: page + 1,
          hasMorePosts: posts.length + newPosts.length !== parseInt(headers['x-wp-total']),
        }))
      }
    )
  }

  setFilter = filter => {
    const { history } = this.props
    const { location } = history

    this.setState(
      {
        page: 1,
        posts: [],
        ...filter,
      },
      () => {
        const { tags, order } = this.state

        scrollTo(null, 56)
        this.fetchPosts()
        history.replace({
          ...location,
          search: `tags=${tags}&order=${order}`,
        })
      }
    )
  }

  render() {
    const { posts, hasMorePosts, order, tags } = this.state
    const {
      t,
      history: { goBack },
    } = this.props

    if (!order || !tags) {
      return null
    }

    return (
      <>
        <Helmet>
          <title>Educabile - Le news</title>
          <meta name="description" content="Questo e' il blog di Educabile Srl" />
          <meta name="keyword" content="educabile, privacy, policy, cookie" />
        </Helmet>
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
            label={t('filtraPerCategoria')}
            value={this.state.tags}
            onChange={({ target: { value } }) => {
              this.setFilter({
                tags: value,
              })
            }}>
            <option value="3,4">{t('tutteLeCategorie')}</option>
            <option value="4">{t('didatticaDigitale')}</option>
            <option value="3">{t('dataScience')}</option>
          </Select>
          <Select
            label={t('ordinaPer')}
            value={this.state.order}
            onChange={({ target: { value } }) => {
              this.setFilter({
                order: value,
              })
            }}>
            <option value="desc">{t('piuRecenti')}</option>
            <option value="asc">{t('menoRecenti')}</option>
          </Select>
        </Row>

        <InfiniteScroll
          loadMore={this.fetchPosts}
          hasMore={hasMorePosts}
          loader={<Spinner key="loader" />}
          initialLoad={false}>
          <Row>
            {posts.map((post, index) => (
              <Col s={12} xl={4} key={index}>
                <Slide bottom>
                  <PostCard post={post} />
                </Slide>
              </Col>
            ))}
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
}

export default withNamespaces()(Blog)
