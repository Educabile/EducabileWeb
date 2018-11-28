import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import wp from '../../axios-wordpress'
import Spinner from '../../components/Spinner/Spinner'
import { Row, Col, Button } from 'react-materialize'
import Select from '../../components/Select/Select'
import Icon from '@mdi/react'
import {
  mdiFacebookBox,
  mdiTwitterBox,
  mdiLinkedinBox,
  mdiGooglePlusBox,
  mdiShareVariant,
  mdiArrowLeft,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import italianString from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import qs from 'query-string'
import Slide from 'react-reveal/Slide'
import Card from '../../components/Card/Card'
import { scrollTo } from '../../libs/utils'
import idgen from '../../idgen'
import Dropdown from '../../components/Dropdown/Dropdown'

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
        this.setState(({ posts, page }) => {
          return {
            posts: posts.concat(...newPosts),
            page: page + 1,
            hasMorePosts: posts.length + newPosts.length !== parseInt(headers['x-wp-total']),
          }
        })
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

  renderImage(post) {
    if (post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0].source_url
    } else {
      return null
    }
  }

  renderFab(post) {
    let css = null

    if (post._embedded['wp:term'][1].length > 0) {
      switch (post._embedded['wp:term'][1][0].slug) {
        case 'data-science':
          css = 'greenGradient'
          break

        case 'didattica-digitale':
          css = 'orangeGradient'
          break

        case 'undefined':
        case 'null':
        default:
          break
      }
    }

    return {
      className: `${css} hoverable`,
      waves: 'light',
      large: true,
      icon: 'keyboard_arrow_right',
      to: `/blog/post/${post.slug}`,
      node: Link,
    }
  }

  renderActions(post, index) {
    const { t } = this.props
    let actions = []

    if (post._embedded['wp:term'][1].length > 0) {
      switch (post._embedded['wp:term'][1][0].slug) {
        case 'didattica-digitale':
          actions.push(
            <Link key={`card-${index}-action-${idgen()}`} to="/blog?tags=4&order=desc">
              <Button
                className="orangeGradient chip white-text left hoverable"
                style={{
                  transition: 'all .5s ease-out',
                  textShadow: ' 0px 2px 4px rgba(0,0,0, .5)',
                }}>
                {t('didatticaDigitale')}
              </Button>
            </Link>
          )
          break

        case 'data-science':
          actions.push(
            <Link key={`card-${index}-action-${idgen()}`} to="blog?tags=3&order=desc">
              <Button
                className="greenGradient chip white-text left hoverable"
                large
                style={{
                  transition: 'all .5s ease-out',
                  textShadow: ' 0px 2px 4px rgba(0,0,0, .5)',
                }}>
                {t('dataScience')}
              </Button>
            </Link>
          )
          break

        default:
          break
      }
    }

    return actions
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
            {posts.map((post, index) => {
              return (
                <Col s={12} xl={4} key={index}>
                  <Slide bottom>
                    <Card
                      className="rounded z-depth-2 hoverable"
                      title={post.title.rendered}
                      image={this.renderImage(post)}
                      fab={null || this.renderFab(post)}
                      large
                      actions={[
                        ...this.renderActions(post),
                        <Dropdown
                          key={`card-${index}-action-${idgen()}`}
                          options={{ constrainWidth: false, alignment: 'right' }}
                          trigger={
                            <Button className="white right" flat style={{ display: 'inline-flex' }}>
                              <Icon path={mdiShareVariant} size={1} color="#1565C0" />
                            </Button>
                          }>
                          <span
                            onClick={() => {
                              this.openPopup(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                                  `https://www.educabile.it/blog/post/${post.slug}`
                                )}`
                              )
                            }}
                            className="blue-text text-darken-3">
                            <Icon className="left" path={mdiFacebookBox} size={1} color="#3b5998" />
                            Facebook
                          </span>
                          <span
                            className="blue-text text-darken-3"
                            onClick={() => {
                              this.openPopup(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                                  `https://www.educabile.it/blog/post/${post.slug}`
                                )}`
                              )
                            }}>
                            <Icon className="left" path={mdiTwitterBox} size={1} color="#1da1f2" />
                            Twitter
                          </span>
                          <span
                            className="blue-text text-darken-3"
                            onClick={() => {
                              this.openPopup(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                                  `https://www.educabile.it/blog/post/${post.slug}`
                                )}`
                              )
                            }}>
                            <Icon
                              className="left"
                              path={mdiGooglePlusBox}
                              size={1}
                              color="#dd4b39"
                            />
                            Google Plus
                          </span>
                          <span
                            className="blue-text text-darken-3"
                            onClick={() => {
                              this.openPopup(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                                  `https://www.educabile.it/blog/post/${post.slug}`
                                )}`
                              )
                            }}>
                            <Icon className="left" path={mdiLinkedinBox} size={1} color="#0077b5" />
                            Linkedin
                          </span>
                        </Dropdown>,
                      ]}>
                      <TimeAgo date={post.date} formatter={buildFormatter(italianString)} />
                      <div
                        style={{ maxHeight: '6em' }}
                        className="flow-text grey-text"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </Card>
                  </Slide>
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
}

export default withNamespaces()(Blog)
