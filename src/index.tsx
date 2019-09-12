import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import UniversalTilt from 'universal-tilt.js';
import { Options } from 'universal-tilt.js/lib/types';

type Props = {
  settings: object;
  callbacks: object;
  tiltChange: (e: CustomEvent) => any;
  className: string;
  children: ChildNode | ChildNode[];
};

export default function ReactTilt({
  settings,
  callbacks,
  tiltChange,
  className,
  children,
  ...props
}: Props) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    UniversalTilt.init({ elements: current, settings, callbacks } as Options);

    const output = (e: CustomEvent) => tiltChange(e.detail);

    if (tiltChange)
      current!.addEventListener('tiltChange', output as EventListener);

    return () => current!.universalTilt.destroy();
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
