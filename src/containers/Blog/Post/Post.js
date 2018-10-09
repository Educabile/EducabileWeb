import React, { Component } from "react";
import { Icon, Button, Preloader } from "react-materialize";
import Parallax from "../../../components/Parallax/Parallax";
import Container from "../../../components/Container/Container";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    axios
      .get(
        `http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?_embed&slug=${
          this.props.match.params.postSlug
        }`
      )
      .then(res => {
        this.setState({
          post: res.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let post = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 70px)"
        }}
      >
        <Preloader />
      </div>
    );

    if (this.state.post) {
      post = (
        <React.Fragment>
          <Parallax
            style={{
              height: 380,
              backgroundColor: "rgba(0,0,0, .125)"
            }}
            imageSrc={
              this.state.post._embedded["wp:featuredmedia"][0].media_details
                .sizes.full.source_url
            }
          >
            <h1
              className="white-text"
              style={{
                textShadow: "0px 2px 20px #333",
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -30%)"
              }}
            >
              {this.state.post.title.rendered}
            </h1>
          </Parallax>
          <Container
            className="section white z-depth-2"
            style={{
              transform: "translateY(-10vh)",
              borderRadius: "20px"
            }}
          >
            <Button
              className="white blue-text text-darken-3"
              flat
              large
              waves="light"
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <Icon left large>
                arrow_back
              </Icon>
              Torna indietro
            </Button>

            <Container>
              <span
                className="flow-text grey-text "
                dangerouslySetInnerHTML={{
                  __html: this.state.post.content.rendered
                }}
              />
            </Container>
          </Container>
        </React.Fragment>
      );
    }

    return post;
  }
}

export default Post;
