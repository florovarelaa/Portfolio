import React from 'react';
import './LazyImage.css'

class LazyImage extends React.Component {
  state = { src: null };

  componentDidMount() {

    const { srcDesktop, srcMobile } = this.props;

    const imageLoader = new Image();
    imageLoader.src = srcMobile;

    imageLoader.onload = () => {
      let width = document.body.clientWidth;
      width > 768 ? this.setState({ src: srcDesktop }) : this.setState({ src: srcMobile });
    };

    let onResize = function() {
      let width = document.body.clientWidth;
      width > 768 ? imageLoader.src = srcDesktop : imageLoader.src = srcMobile;
    }
    window.addEventListener("resize", onResize);

  };

  render() {
    return (
    <img className="background-image" src={this.state.src || this.props.placeholder} alt=""/>
    )
  }
}

export default LazyImage;