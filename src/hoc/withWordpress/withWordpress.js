import React, { Component } from 'react'
import PropTypes from 'prop-types'
import i18n from 'src/i18n'
import wp from 'src/wordpress'

const withWordpress = (WrappedComponent, slug) => {
  class WordPressPage extends Component {
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
      wp.pages()
        .slug(slug)
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

      return <WrappedComponent {...this.props} page={page} loading={loading} />
    }
  }

  return WordPressPage
}

withWordpress.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
}

export default withWordpress
