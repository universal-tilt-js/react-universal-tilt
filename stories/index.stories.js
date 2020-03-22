import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
} from '@storybook/addon-knobs';

import ReactTilt from '../lib/react-universal-tilt.esm';

const wrapperStyles = {
  display: 'flex',
  minWidth: '100%',
  minHeight: 'calc(100vh - 16px)',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'ReactTilt',
  component: ReactTilt,
  decorators: [
    (storyFn) => <div style={wrapperStyles}>{storyFn()}</div>,
    withKnobs,
  ],
};

const tiltStyles = {
  width: 300,
  height: 300,
  borderRadius: 10,
};

export const basic = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #3c3aad, #f7c340)',
    }}
    settings={{
      reset: boolean('Reset', true),
      reverse: boolean('Reverse', false),
      scale: number('Set scale', 1.1, { min: 0 }),
    }}
  />
);

export const shine = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(135deg, #a90329, #eb8415)',
    }}
    settings={{
      shine: boolean('Add shine', true),
      'shine-opacity': number('Opacity value', 0.5, {
        min: 0,
        max: 1,
        step: 0.1,
        range: true,
      }),
      'shine-save': boolean('Save shine effect', true),
      'shine-prerender': boolean('Prerender shine', false),
    }}
  />
);

export const parallax = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #ebceb7, #de21de)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transformStyle: 'preserve-3d',
    }}
  >
    <div
      style={{
        width: 180,
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 10,
        transform: 'translateZ(80px)',
      }}
    ></div>
  </ReactTilt>
);

export const base = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(135deg, #cb60b3, #a80077)',
    }}
    settings={{
      base: document.querySelector('#root'),
    }}
  />
);

export const startupValues = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #c5cf76, #49a5bf)',
    }}
    settings={{
      startX: number('Startup X value', 20),
      startY: number('Startup Y value', -20),
      disabled: radios('Disabled axis', { X: 'X', Y: 'Y' }, 'X'),
    }}
  />
);

export const excludeUserAgents = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #f1e767, #feb645)',
    }}
    settings={{
      exclude: `/(${text('Exclule user agents', 'Firefox')})/`,
      gyroscope: boolean('Gyroscope', false),
    }}
  />
);

export const changeEvent = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(338deg, #696bff, #8cffe6)',
    }}
    tiltChange={action('tiltChange')}
  />
);
