import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from 'components/Spinner/Spinner'
import { Row, Col, Button, Select, Container, Section } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Slide from 'react-reveal/Slide'
import PostCard from 'components/PostCard/PostCard'
import { Helmet } from 'react-helmet'
import wp from 'src/wordpress'
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

    wp.posts()
      .embed()
      .page(page)
      .order(order)
      .orderby('date')
      .tags(tags)
      .get()
      .then(newPosts => {
        this.setState(({ posts, page }) => ({
          posts: posts.concat(...newPosts),
          page: page + 1,
          hasMorePosts: posts.length + newPosts.length !== newPosts._paging.total,
        }))
      })
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
        <Section
          className="grey lighten-5"
          style={{
            minHeight: 'calc(100vh - 64px - 40px)',
          }}>
          <Row>
            <Col>
              <Button
                className="blue-text text-darken-3 grey lighten-5"
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

          <Container>
            <InfiniteScroll
              loadMore={this.fetchPosts}
              hasMore={hasMorePosts}
              loader={<Spinner key="loader" />}
              initialLoad={false}>
              <Row>
                {posts.map((post, index) => {
                  return (
                    <Col s={12} xl={4} key={index}>
                      <Slide bottom>
                        <PostCard post={post} />
                      </Slide>
                    </Col>
                  )
                })}
              </Row>
            </InfiniteScroll>
          </Container>
        </Section>
      </>
    )
  }
}

Blog.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(Blog)
