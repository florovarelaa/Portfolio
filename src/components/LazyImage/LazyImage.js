import React from 'react';
import './LazyImage.css'

class LazyImage extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  };

  render() {
    return (
    <img className="background-image" src={this.state.src || this.props.placeholder} alt=""/>
    )
  }
}

export default LazyImage;