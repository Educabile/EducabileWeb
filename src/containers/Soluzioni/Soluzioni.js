import React, { Component } from 'react'
import { Button, Section, Row, Col, Container, Modal, MediaBox, Parallax } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiInformationVariant, mdiFileDownloadOutline } from '@mdi/js'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Base from 'components/Base/Base'
import Slide from 'react-reveal/Slide'
import Card from 'components/Card/Card'
import cx from 'class-names'
import wp from 'src/wordpress'
import withWordpress from 'hoc/withWordpress'
import Spinner from 'components/Spinner/Spinner'
import { Redirect } from 'react-router-dom'
import Carousel from 'components/Carousel/Carousel'
import Picture from '@cloudpower97/react-progressive-picture'

class Soluzioni extends Component {
  state = {
    solutions: [],
    page: 1,
    hasMorePosts: false,
  }

  fetchPosts = () => {
    const { page } = this.state
    wp.soluzioni()
      .page(page)
      .perPage(12)
      .embed()
      .then(corsi => {
        this.setState(({ solutions, page }) => ({
          solutions: solutions.concat(...corsi),
          page: page + 1,
          hasMorePosts: solutions.length + corsi.length !== corsi._paging.total,
        }))
      })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    const { solutions } = this.state
    const { page, loading } = this.props

    const Content = () => {
      if (page) {
        const featuredImage = page._embedded['wp:featuredmedia']

        return (
          <>
            {featuredImage && solutions.length && (
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
                  {solutions.length &&
                    solutions.map(solution => (
                      <div
                        key={solution.id}
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
                          {solution.title.rendered}
                        </p>
                      </div>
                    ))}
                </Carousel>
              </Parallax>
            )}

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

    return (
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

        <Section className="grey lighten-5">
          <Container>
            <Row>
              {solutions.map((solution, index) => (
                <Col s={12} xl={4} key={index}>
                  <Slide bottom>
                    <Card
                      className={cx('rounded z-depth-2 hoverable')}
                      title={solution.title.rendered}
                      image={solution._embedded['wp:featuredmedia'][0].source_url}
                      fab={
                        <Button
                          href={`#${solution.id}`}
                          className={cx('modal-trigger halfway-fab hoverable')}
                          waves="light"
                          large
                          floating
                          style={{
                            display: 'inline-flex',
                            justifyContent: 'center',
                          }}
                          tooltip="Ulteriori informazioni">
                          <Icon size={1.25} color="white" path={mdiInformationVariant} />
                        </Button>
                      }
                      large
                      actions={[
                        <a
                          key="brochure"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={solution.acf.brochure}>
                          <Button
                            className={cx('hoverable', 'right')}
                            waves="light"
                            large
                            floating
                            style={{
                              display: 'inline-flex',
                              justifyContent: 'center',
                            }}
                            tooltip="Scarica Brochure">
                            <Icon size={1.25} color="white" path={mdiFileDownloadOutline} />
                          </Button>
                        </a>,
                      ]}>
                      <div
                        className="flow-text"
                        style={{
                          maxHeight: '9em',
                          overflowY: 'auto',
                        }}
                        dangerouslySetInnerHTML={{
                          __html: solution.content.rendered,
                        }}
                      />
                    </Card>
                  </Slide>
                  <Modal
                    header={null}
                    actions={null}
                    id={`${solution.id}`}
                    className="scheda-modal">
                    <MediaBox
                      src={solution.acf.scheda}
                      width="100%"
                      options={{
                        onOpenEnd: () => {
                          document.body.style.overflow = 'hidden'
                        },
                        onCloseEnd: () => {
                          document.body.style.overflow = 'hidden'
                        },
                      }}
                    />
                  </Modal>
                </Col>
              ))}
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}

Soluzioni.propTypes = {
  page: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default withWordpress(Soluzioni, 'soluzioni')
