import React, { Component } from 'react'
import { Button, Container, Parallax } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import wp from 'src/wordpress'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner/Spinner'
import TimeAgo from 'react-timeago'
import italianString from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { Helmet } from 'react-helmet'
import Picture from '@cloudpower97/react-progressive-picture'
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

    wp.posts()
      .embed()
      .slug(postSlug)
      .get()
      .then(([post]) => {
        this.setState({
          post,
        })
      })
  }

  render() {
    const {
      t,
      history: { goBack },
    } = this.props

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
          <Helmet>
            <title>Educabile - {title}</title>
          </Helmet>
          <Parallax
            style={{
              height: 440,
              backgroundColor: 'rgba(0,0,0, .125)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              clipPath: 'polygon(0px 0px, 100% 0px, 100% 330px, 0px 400px)',
            }}
            image={<Picture src={_embedded['wp:featuredmedia'][0].source_url} />}>
            <h1
              className="center-align white-text hide-on-large-only"
              style={{ textShadow: 'rgba(0, 0, 0, 0.72) 0px 2px 4px' }}>
              {title}
            </h1>
          </Parallax>
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
              <h1 className="left-align hide-on-med-and-down">{title}</h1>
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
