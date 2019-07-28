import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import UniversalTilt from 'universal-tilt.js';

export default function ReactTilt({
  settings,
  callbacks,
  tiltChange,
  className,
  children,
  ...props
}) {
  const el = useRef();

  useEffect(() => {
    const current = el.current;

    UniversalTilt.init({ elements: current, settings, callbacks });

    const output = e => tiltChange(e.detail);

    if (tiltChange) current.addEventListener('tiltChange', output);

    return () => current.universalTilt.destroy();
  }, [callbacks, settings, tiltChange]);

  return (
    <div {...props} ref={el} className={className}>
      {children}
    </div>
  );
}

ReactTilt.propTypes = {
  settings: PropTypes.object,
  callbacks: PropTypes.object,
  tiltChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.object
};

ReactTilt.defaultProps = {
  className: 'tilt'
};
