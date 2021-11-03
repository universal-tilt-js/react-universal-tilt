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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current;

    UniversalTilt.init({ elements, settings, callbacks });

    const output = (e: Event) => onTiltChange((e as CustomEvent).detail);

    if (onTiltChange) {
      elements.addEventListener('tiltChange', output);
    }

    return () => {
      if (onTiltChange) {
        elements.removeEventListener('tiltChange', output);
      }

      elements.universalTilt.destroy();
    };
  }, [settings, callbacks, onTiltChange]);

  return (
    <div {...props} ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ReactTilt;
