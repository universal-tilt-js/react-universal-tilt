import React, { Component } from 'react';
import UniversalTilt from 'universal-tilt.js';

export default class ReactTilt extends Component {
  constructor() {
    super();

    this.el = React.createRef();
  }

  componentDidMount() {
    const { options } = this.props;
    const tilt = new UniversalTilt(this.el.current, options);

    if (this.props.tiltChange) {
      this.el.current.addEventListener('tiltChange', this.output);
    }
  }

  output = e => this.props.tiltChange(e.detail);

  render() {
    return (
      <div
        className={this.props.className || 'tilt'}
        style={this.props.style}
        ref={this.el}>
        {this.props.children}
      </div>
    );
  }
}
