import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiFacebookBox,
  mdiTwitterBox,
  mdiLinkedinBox,
  mdiShareVariant,
  mdiChevronRight,
} from '@mdi/js'
import TimeAgo from 'react-timeago'
import italianString from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Card from 'components/Card/Card'
import idgen from '../../idgen'
import { Link } from 'react-router-dom'
import cx from 'class-names'
import { withNamespaces } from 'react-i18next'
import Styles from './PostCard.module.css'

const PostCard = ({ post, t }) => {
  const renderImage = post => {
    if (post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0].source_url
    } else {
      return null
    }
  }

  const renderFab = post => {
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

  const renderActions = (post, index) => {
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

  const openPopup = url => {
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

  return (
    <Card
      className={cx('rounded z-depth-2 hoverable', Styles.PostCard)}
      title={post.title.rendered}
      image={renderImage(post)}
      fab={null || renderFab(post)}
      large
      actions={[
        ...renderActions(post),
        <Dropdown
          key={`card-action-${idgen()}`}
          options={{ constrainWidth: false, alignment: 'right' }}
          trigger={
            <Button className="white right" flat style={{ display: 'inline-flex' }}>
              <Icon path={mdiShareVariant} size={1} color="#1565C0" />
            </Button>
          }>
          <span
            onClick={() => {
              openPopup(
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
              openPopup(
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
              openPopup(
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
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default withNamespaces()(PostCard)
