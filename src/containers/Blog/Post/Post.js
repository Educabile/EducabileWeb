import React, { Component } from 'react'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import Container from '../../../components/Container/Container'
import Parallax from '../../../components/Parallax/Parallax'
import wp from '../../../axios-wordpress'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Spinner from '../../../components/Spinner/Spinner'
import TimeAgo from 'react-timeago'
import italianString from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { scrollTo } from '../../../libs/utils'
class Post extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    const {
      match: {
        params: { postSlug },
      },
    } = this.props

    wp.get(`posts?_embed&slug=${postSlug}`).then(res => {
      const { data } = res
      this.setState({
        post: data[0],
      })
    })
  }

  render() {
    const {
      t,
      history: { goBack },
    } = this.props

    scrollTo(null, 56)

    let post = <Spinner />

    if (this.state.post) {
      const {
        post: {
          _embedded,
          date,
          title: { rendered: title },
          content: { rendered: content },
        },
      } = this.state
      post = (
        <>
          <Parallax
            style={{
              height: 380,
              backgroundColor: 'rgba(0,0,0, .125)',
            }}
            imageSrc={_embedded['wp:featuredmedia'][0].source_url}
          />
          <Container
            className="section white z-depth-2"
            style={{
              transform: 'translateY(-20vh)',
              borderRadius: '20px',
            }}>
            <Button
              className="white blue-text text-darken-3"
              flat
              large
              waves="light"
              onClick={() => {
                goBack()
              }}
              style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Icon
                path={mdiArrowLeft}
                size="1.3rem"
                color="#1565C0"
                style={{ transform: 'translateX(-35%)' }}
              />
              {t('tornaIndietro')}
            </Button>

            <Container>
              <h1 className="left-align">{title}</h1>
              <TimeAgo date={date} formatter={buildFormatter(italianString)} />

              <span
                className="flow-text grey-text "
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </Container>
          </Container>
        </>
      )
    }

    return post
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default withNamespaces()(Post)
