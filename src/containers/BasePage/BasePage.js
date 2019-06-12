import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Base from 'components/Base'
import Spinner from 'components/Spinner/Spinner'
import { Parallax } from 'react-materialize'
import Picture from '@cloudpower97/react-progressive-picture'
import { Redirect } from 'react-router-dom'
import i18n from 'src/i18n'
import wp from 'src/wordpress'

class WordPressPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  state = {
    page: null,
    loading: true,
  }

  componentDidMount() {
    i18n.on('languageChanged', this.onLanguageChanged)

    this.fetchFromWP()
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.onLanguageChanged)
  }

  onLanguageChanged = () => {
    this.setState(
      {
        page: null,
        loading: true,
      },
      this.fetchFromWP()
    )
  }

  fetchFromWP = () => {
    const { pathname } = this.props.location

    wp.pages()
      .slug(pathname.split('/').pop())
      .param('lang', i18n.language)
      .embed()
      .then(([page]) => {
        this.setState({
          page,
          loading: false,
        })
      })
  }

  render() {
    const { page, loading } = this.state
    const { children } = this.props

    if (page) {
      const featuredImage = page._embedded['wp:featuredmedia']

      return (
        <>
          {featuredImage && <Parallax image={<Picture src={featuredImage[0].source_url} />} />}

          <Base
            content={
              <div
                dangerouslySetInnerHTML={{
                  __html: page.content.rendered,
                }}
              />
            }
          />

          {children}
        </>
      )
    } else {
      if (loading) {
        return <Spinner />
      } else {
        return <Redirect to="/" />
      }
    }
  }
}

export default withRouter(WordPressPage)
