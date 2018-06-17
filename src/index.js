import React, { Component } from 'react';
import UniversalTilt from 'universal-tilt.js';

export default class ReactTilt extends Component {
  componentDidMount() {
    const { options } = this.props;
    new UniversalTilt(this.el, options);

    if (this.props.tiltChange !== undefined)
      this.el.addEventListener('tiltChange', this.output);
  }

  output = e => this.props.tiltChange(e.detail);

  render() {
    return (
      <div className={ this.props.className || 'tilt' } style={ this.props.style } ref={ el => this.el = el }>
        { this.props.children }
      </div>
    );
  }
}
