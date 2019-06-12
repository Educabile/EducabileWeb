import React, { Component } from 'react'
import { Section, Parallax } from 'react-materialize'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Base from 'components/Base/Base'
import Carousel from 'components/Carousel/Carousel'
import Picture from '@cloudpower97/react-progressive-picture'
import Styles from './Servizi.module.css'
import withWordpress from 'hoc/withWordpress'
import cx from 'class-names'
import SlideAnimation from 'react-reveal/Slide'
import wp from 'src/wordpress'
import { Redirect } from 'react-router-dom'
import Spinner from 'components/Spinner/Spinner'

class Servizi extends Component {
  state = {
    services: [],
    page: 1,
    hasMorePosts: false,
  }

  fetchPosts = () => {
    const { page } = this.state
    wp.servizi()
      .page(page)
      .perPage(12)
      .embed()
      .then(corsi => {
        this.setState(({ services, page }) => ({
          services: services.concat(...corsi),
          page: page + 1,
          hasMorePosts: services.length + corsi.length !== corsi._paging.total,
        }))
      })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    const { services } = this.state
    const { page, loading } = this.props

    const Content = () => {
      if (page) {
        const featuredImage = page._embedded['wp:featuredmedia']
        const __html = page.content.rendered

        return (
          <>
            {featuredImage && (
              <Parallax
                className="feature-slider"
                image={<Picture src={featuredImage[0].source_url} />}
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                }}>
                <Carousel
                  autoPlay
                  className="white-text"
                  options={{
                    fullWidth: true,
                    numVisible: 1,
                  }}>
                  {services.length &&
                    services.map(service => (
                      <div
                        key={service.id}
                        className="center"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginLeft: 100,
                        }}>
                        <p
                          style={{
                            fontSize: '3em',
                            textShadow: '#3333 4px 2px 2px',
                          }}>
                          {service.title.rendered}
                        </p>
                      </div>
                    ))}
                </Carousel>
              </Parallax>
            )}

            {__html && (
              <Base
                title="Educabile una StartUp Innovativa"
                content={
                  <div
                    dangerouslySetInnerHTML={{
                      __html,
                    }}
                  />
                }
              />
            )}
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

    return services.length ? (
      <>
        <Helmet>
          <meta
            name="description"
            content="Educabile Srl si propone referente affidabile nel gestire scenari complessi ad alto contenuto tecnologico ed offre servizi mirati ad Aziende, Professionisti ed Istituzioni Scolastiche."
          />
          <meta
            name="keyword"
            content="educazione, azienda, didattica, professionisti, digitale, innovazione, startup"
          />
        </Helmet>

        <Content />

        {services.map((service, index) => (
          <Section key={service.id} className="service-section">
            <Parallax
              image={<Picture src={service._embedded['wp:featuredmedia'][0].source_url} />}
              className={Styles.Parallax}>
              <Section>
                <SlideAnimation right={index % 2 !== 0} left={index % 2 === 0}>
                  <div
                    className={cx(Styles.Caption, index % 2 === 0 ? 'left' : 'right', 'rounded')}>
                    <h2>{service.title.rendered}</h2>
                    <div
                      className="light grey-text text-lighten-3 flow-text"
                      dangerouslySetInnerHTML={{
                        __html: service.content.rendered,
                      }}
                    />
                  </div>
                </SlideAnimation>
              </Section>
            </Parallax>
          </Section>
        ))}
      </>
    ) : null
  }
}

Servizi.propTypes = {
  t: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default withWordpress(withNamespaces('common')(Servizi), 'servizi')
