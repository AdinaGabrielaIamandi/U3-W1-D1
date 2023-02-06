import { Component } from "react";

class ImageComponent extends Component {
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
