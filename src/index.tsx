import React, { useEffect, useRef, HTMLProps } from 'react';
import UniversalTilt from 'universal-tilt.js';
import { Settings, Callbacks } from 'universal-tilt.js/lib/types';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
  readonly onTiltChange?: (e: CustomEvent) => void;
}

const ReactTilt = ({
  settings,
  callbacks,
  onTiltChange,
  className = 'tilt',
  children,
  ...props
}: Props) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = el.current;

    UniversalTilt.init({ elements: current, settings, callbacks });

    const output = (e: Event) => onTiltChange((e as CustomEvent).detail);

    if (onTiltChange) {
      current.addEventListener('tiltChange', output);
    }

    return () => {
      if (onTiltChange) {
        current.removeEventListener('tiltChange', output);
      }

      current.universalTilt.destroy();
    };
  }, [settings, callbacks, onTiltChange]);

  return (
    <div {...props} ref={el} className={className}>
      {children}
    </div>
  );
};

export default ReactTilt;
