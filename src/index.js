import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import UniversalTilt from 'universal-tilt.js';

export default function ReactTilt({
  settings,
  callbacks,
  tiltChange,
  className,
  style,
  children
}) {
  const el = useRef();

  const output = e => tiltChange(e.detail);

  useEffect(() => {
    UniversalTilt.init({ elements: el.current, settings, callbacks });

    if (tiltChange) el.current.addEventListener('tiltChange', output);

    return () => el.current.univesalTilt.destroy();
  }, []);

  return (
    <div className={className} style={style} ref={el}>
      {children}
    </div>
  );
}

ReactTilt.propTypes = {
  settings: PropTypes.object,
  callbacks: PropTypes.object,
  tiltChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

ReactTilt.defaultProps = {
  className: 'tilt',
  style: {}
};
