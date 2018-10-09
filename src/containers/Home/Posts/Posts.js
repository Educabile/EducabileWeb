import React, { Component } from "react";
import Card from "../../../components/Card/Card";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Col from "../../../components/Col/Col";
import { Button, Row, Preloader } from "react-materialize";
import Icon from "@mdi/react";
import {
  mdiFacebookBox,
  mdiTwitterBox,
  mdiLinkedinBox,
  mdiGooglePlusBox,
  mdiShareVariant
} from "@mdi/js";
import idgen from "../../../idgen";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios
      .get(
        "http://143.225.48.253/other/wordpress/wp-json/wp/v2/posts?_embed&order=desc&order_by=date&per_page=3"
      )
      .then(response => {
        this.renderPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderImage(post) {
    if (post._embedded["wp:featuredmedia"]) {
      return post._embedded["wp:featuredmedia"][0].media_details.sizes
        .medium_large.source_url;
    } else {
      return null;
    }
  }

  renderFab(post) {
    let css = null;

    if (post._embedded["wp:term"][1].length > 0) {
      switch (post._embedded["wp:term"][1][0].slug) {
        case "data-science":
          css = "green";
          break;

        case "didattica-digitale":
          css = "orange";
          break;

        case "undefined":
        case "null":
        default:
          break;
      }
    }

    return {
      className: `${css} hoverable`,
      waves: "light",
      large: true,
      icon: "keyboard_arrow_right",
      to: `/blog/post/${post.slug}`,
      node: Link
    };
  }

  renderActions(post, index) {
    let actions = [];

    if (post._embedded["wp:term"][1].length > 0) {
      switch (post._embedded["wp:term"][1][0].slug) {
        case "undefined":
        case "null":
          break;

        case "didattica-digitale":
          actions.push(
            <Button
              key={`card-${index}-action-${idgen()}`}
              className="orange chip white-text left hoverable"
              style={{
                transition: "all .5s ease-out"
              }}
              to="/blog/tagged/didattica-digitale"
              node={Link}
            >
              Didattica Digitale
            </Button>
          );
          break;

        case "data-science":
          actions.push(
            <Button
              key={`card-${index}-action-${idgen()}`}
              className="green chip white-text left hoverable"
              large
              style={{
                transition: "all .5s ease-out"
              }}
              to="/blog/tagged/data-technology"
              node={Link}
            >
              Data Science
            </Button>
          );
          break;

        default:
          break;
      }
    }

    return actions;
  }

  openPopup(url) {
    var dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    var dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : window.screen.width;
    var height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : window.screen.height;

    var left = width / 2 - 700 / 2 + dualScreenLeft;
    var top = height / 2 - 600 / 2 + dualScreenTop;

    setTimeout(function() {
      var newWindow = window.open(
        url,
        "",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes, width=700, height=600, top=" +
          top +
          ", left=" +
          left
      );

      if (window.focus) {
        newWindow.focus();
      }
    }, 250);
  }

  renderPosts(posts) {
    this.setState({
      posts: posts.map((post, index) => {
        let actions = this.renderActions(post);
        return (
          <Col s={12} xl={4} key={post.slug}>
            <Card
              className="rounded z-depth-2 hoverable"
              title={post.title.rendered}
              image={this.renderImage(post, index)}
              fab={null || this.renderFab(post)}
              large
              actions={[
                ...actions,
                <Dropdown
                  key={`card-${index}-action-${idgen()}`}
                  options={{ constrainWidth: false }}
                  trigger={
                    <Button
                      className="white right"
                      flat
                      style={{ display: "inline-flex" }}
                    >
                      <Icon
                        path={mdiShareVariant}
                        size={1}
                        horizontal
                        vertical
                        color="#1565C0"
                      />
                    </Button>
                  }
                >
                  <span
                    onClick={() => {
                      this.openPopup(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                          `https://www.educabile.it/blog/post/${post.slug}`
                        )}`
                      );
                    }}
                    className="blue-text text-darken-3"
                  >
                    <Icon
                      className="left"
                      path={mdiFacebookBox}
                      size={1}
                      horizontal
                      vertical
                      color="#3b5998"
                    />
                    Facebook
                  </span>
                  <span
                    className="blue-text text-darken-3"
                    onClick={() => {
                      this.openPopup(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                          `https://www.educabile.it/blog/post/${post.slug}`
                        )}`
                      );
                    }}
                  >
                    <Icon
                      className="left"
                      path={mdiTwitterBox}
                      size={1}
                      horizontal
                      vertical
                      color="#1da1f2"
                    />
                    Twitter
                  </span>
                  <span
                    className="blue-text text-darken-3"
                    onClick={() => {
                      this.openPopup(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                          `https://www.educabile.it/blog/post/${post.slug}`
                        )}`
                      );
                    }}
                  >
                    <Icon
                      className="left"
                      path={mdiGooglePlusBox}
                      size={1}
                      horizontal
                      vertical
                      color="#dd4b39"
                    />
                    Google Plus
                  </span>
                  <span
                    className="blue-text text-darken-3"
                    onClick={() => {
                      this.openPopup(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                          `https://www.educabile.it/blog/post/${post.slug}`
                        )}`
                      );
                    }}
                  >
                    <Icon
                      className="left"
                      path={mdiLinkedinBox}
                      size={1}
                      horizontal
                      vertical
                      color="#0077b5"
                    />
                    Linkedin
                  </span>
                </Dropdown>
              ]}
            >
              <div
                style={{ maxHeight: "6em" }}
                className="flow-text grey-text"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </Card>
          </Col>
        );
      })
    });
  }

  render() {
    return <Row>{this.state.posts || <Preloader />}</Row>;
  }
}

export default Posts;
