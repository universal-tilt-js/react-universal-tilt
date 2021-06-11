import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactTilt from '../src';

const wrapperStyles = {
  display: 'flex',
  minWidth: '100%',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'ReactTilt',
  component: ReactTilt,
  decorators: [
    (Story) => (
      <div style={wrapperStyles}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const tiltStyles = {
  width: 300,
  height: 300,
  borderRadius: 10,
};

interface BasicProps {
  readonly reset: boolean;
  readonly reverse: boolean;
  readonly scale: number;
}

export const Basic: Story<BasicProps> = (args) => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #3c3aad, #f7c340)',
    }}
    settings={args}
  />
);

Basic.argTypes = {
  scale: {
    control: {
      type: 'number',
      min: 0,
    },
  },
};

Basic.args = {
  reset: true,
  reverse: false,
  scale: 1.1,
};

interface ShineProps {
  readonly shine: boolean;
  readonly opacity: number;
  readonly save: boolean;
  readonly prerender: boolean;
}

export const Shine: Story<ShineProps> = ({
  shine,
  opacity,
  save,
  prerender,
}) => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(135deg, #a90329, #eb8415)',
    }}
    settings={{
      shine,
      'shine-opacity': opacity,
      'shine-save': save,
      'shine-prerender': prerender,
    }}
  />
);

Shine.argTypes = {
  opacity: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.1,
    },
  },
};

Shine.args = {
  shine: true,
  opacity: 0.5,
  save: true,
  prerender: false,
};

export const Parallax: Story = () => (
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
    />
  </ReactTilt>
);

export const Base: Story = () => (
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

interface StartupValuesProps {
  readonly startX: number;
  readonly startY: number;
  readonly disabled: 'X' | 'Y';
}

export const StartupValues: Story<StartupValuesProps> = (args) => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #c5cf76, #49a5bf)',
    }}
    settings={args}
  />
);

StartupValues.argTypes = {
  disabled: {
    control: {
      type: 'radio',
      options: ['X', 'Y'],
    },
  },
};

StartupValues.args = {
  startX: 20,
  startY: -20,
  disabled: 'X',
};

interface ExcludeUserAgentsProps {
  readonly exclude: string;
  readonly gyroscope: boolean;
}

export const ExcludeUserAgents: Story<ExcludeUserAgentsProps> = ({
  exclude,
  ...args
}) => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(45deg, #f1e767, #feb645)',
    }}
    settings={{
      ...args,
      exclude: new RegExp(exclude),
    }}
  />
);

ExcludeUserAgents.args = {
  exclude: 'Firefox',
  gyroscope: false,
};

export const ChangeEvent: Story = () => (
  <ReactTilt
    style={{
      ...tiltStyles,
      background: 'linear-gradient(338deg, #696bff, #8cffe6)',
    }}
    onTiltChange={action('tiltChange')}
  />
);
