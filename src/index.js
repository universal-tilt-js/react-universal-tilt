import React, { Component } from 'react';
import UniversalTilt from 'universal-tilt.js';

export default class ReactTilt extends Component {
  el = React.createRef();

  componentDidMount() {
    const { options, tiltChange } = this.props;
    const tilt = new UniversalTilt(this.el.current, options);

    if (tiltChange) this.el.current.addEventListener('tiltChange', this.output);
  }

  output = e => this.props.tiltChange(e.detail);

  render() {
    const { className = 'tilt', style = {}, children } = this.props;

    return (
      <div className={className} style={style} ref={this.el}>
        {children}
      </div>
    );
  }
}
