import React, { Component } from 'react'
import { Button, Preloader } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import Parallax from '../../../components/Parallax/Parallax'
import Container from '../../../components/Container/Container'
import wp from '../../../axios-wordpress'
import PropTypes from 'prop-types'

class Post extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    wp.get(`posts?_embed&slug=${this.props.match.params.postSlug}`)
      .then(res => {
        this.setState({
          post: res.data[0],
        })
      })
      .catch(() => {})
  }

  render() {
    let post = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 70px)',
        }}>
        <Preloader />
      </div>
    )

    if (this.state.post) {
      post = (
        <React.Fragment>
          <Parallax
            style={{
              height: 380,
              backgroundColor: 'rgba(0,0,0, .125)',
            }}
            imageSrc={
              this.state.post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
            }
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
                this.props.history.goBack()
              }}
              style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Icon
                path={mdiArrowLeft}
                size="1.3rem"
                color="#1565C0"
                style={{ transform: 'translateX(-35%)' }}
              />
              Torna indietro
            </Button>

            <Container>
              <h1 className="center">{this.state.post.title.rendered}</h1>
              <span
                className="flow-text grey-text "
                dangerouslySetInnerHTML={{
                  __html: this.state.post.content.rendered,
                }}
              />
            </Container>
          </Container>
        </React.Fragment>
      )
    }

    return post
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default Post
