import React, { Component } from 'react'
import Card from 'components/Card/Card'
import Dropdown from 'components/Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiFacebookBox,
  mdiTwitterBox,
  mdiLinkedinBox,
  mdiGooglePlusBox,
  mdiShareVariant,
  mdiChevronRight,
} from '@mdi/js'
import idgen from '../../../../idgen'
import wp from '../../../../axios-wordpress'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner/Spinner'
import Fade from 'react-reveal/Fade'
import TimeAgo from 'react-timeago'
import italianString from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import cx from 'class-names'

class Posts extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  }

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

    return (
      <Link to={`/blog/post/${post.slug}`}>
        <Button
          className={cx('halfway-fab', 'hoverable', css)}
          waves="light"
          large
          floating
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
          }}>
          <Icon path={mdiChevronRight} size="1.5rem" color="white" />
        </Button>
      </Link>
    )
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

  // TODO: Move this funcion in libs
  openPopup(url) {
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY

    var width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width
    var height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height

    var left = width / 2 - 700 / 2 + dualScreenLeft
    var top = height / 2 - 600 / 2 + dualScreenTop

    setTimeout(function() {
      var newWindow = window.open(
        url,
        '',
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes, width=700, height=600, top=' +
          top +
          ', left=' +
          left
      )

      if (window.focus) {
        newWindow.focus()
      }
    }, 250)
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
              let actions = this.renderActions(post)
              return (
                <Col s={12} xl={4} key={index}>
                  <Card
                    className="rounded z-depth-2 hoverable"
                    title={post.title.rendered}
                    image={this.renderImage(post)}
                    fab={null || this.renderFab(post)}
                    large
                    actions={[
                      ...actions,
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
                          <Icon className="left" path={mdiGooglePlusBox} size={1} color="#dd4b39" />
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

export default withNamespaces()(Posts)
