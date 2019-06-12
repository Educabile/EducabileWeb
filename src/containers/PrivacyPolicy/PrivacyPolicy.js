import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-materialize'
import Picture from '@cloudpower97/react-progressive-picture'
import withWordpress from 'hoc/withWordpress'
import Base from 'components/Base'
import Spinner from 'components/Spinner/Spinner'
import { Redirect } from 'react-router-dom'

const PrivacyPolicy = ({ page, loading }) => {
  const Content = () => {
    if (page) {
      const featuredImage = page._embedded['wp:featuredmedia']

      return (
        <>
          {featuredImage && <Parallax image={<Picture src={featuredImage} />} />}

          <Base
            title={page.title.rendered}
            content={
              <div
                dangerouslySetInnerHTML={{
                  __html: page.content.rendered,
                }}
              />
            }
          />
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

  return <Content />
}

PrivacyPolicy.propTypes = {
  page: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default withWordpress(PrivacyPolicy, 'privacy-policy')
