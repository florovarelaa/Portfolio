import React from 'react';

class LazyImage extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return (
    <img src={this.state.src || this.props.placeholder} alt="" style={{
      position:"absolute",
      zIndex: -2,
      height: "100%",
      width: "100%",
     }}
    />
    )
  }
}

export default LazyImage;