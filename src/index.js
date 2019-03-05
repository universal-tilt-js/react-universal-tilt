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

  const output = e => tiltChange(e.detail);

  useEffect(() => {
    UniversalTilt.init({ elements: el.current, settings, callbacks });

    if (tiltChange) el.current.addEventListener('tiltChange', output);

    return () => el.current.univesalTilt.destroy();
  }, []);

  return (
    <div {...props} className={className} ref={el}>
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
