import React, { useEffect, useRef, HTMLProps } from 'react';
import UniversalTilt from 'universal-tilt.js';
import { Settings, Callbacks } from 'universal-tilt.js/lib/types';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
  readonly tiltChange?: (e: CustomEvent) => void;
}

const ReactTilt: React.FC<Props> = ({
  settings,
  callbacks,
  tiltChange,
  className = 'tilt',
  children,
  ...props
}) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    UniversalTilt.init({ elements: current, settings, callbacks });

    const output = (e: Event) => tiltChange((e as CustomEvent).detail);

    if (tiltChange) current.addEventListener('tiltChange', output);

    return () => current.universalTilt.destroy();
  }, [settings, callbacks, tiltChange]);

  return (
    <div {...props} ref={el} className={className}>
      {children}
    </div>
  );
};

export default ReactTilt;
