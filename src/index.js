import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UniversalTilt from 'universal-tilt.js';

export default class ReactTilt extends Component {
  el = React.createRef();

  componentDidMount() {
    const { options, tiltChange } = this.props;
    UniversalTilt.init(this.el.current, options);

    if (tiltChange) this.el.current.addEventListener('tiltChange', this.output);
  }

  componentWillUnmount = () => this.el.current.univesalTilt.destroy();

  output = e => this.props.tiltChange(e.detail);

  render() {
    const { className, style, children } = this.props;

    return (
      <div className={className} style={style} ref={this.el}>
        {children}
      </div>
    );
  }
}

ReactTilt.propTypes = {
  settings: PropTypes.object,
  methods: PropTypes.object,
  tiltChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

ReactTilt.defaultProps = {
  className: 'tilt',
  style: {}
};
