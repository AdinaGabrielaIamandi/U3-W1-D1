import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{ borderRadius: this.props.radius }}
      />
    );
  }
}

export default ImageComponent;
