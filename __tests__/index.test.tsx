import React from 'react';
import { render } from '@testing-library/react';

import ReactTilt from '../src';

describe('ReactTilt', () => {
  it('should render component with default props', () => {
    const { container } = render(<ReactTilt />);

    expect(container).toMatchSnapshot();
  });

  it('should render component with custom props', () => {
    const { container } = render(
      <ReactTilt
        className="tilt-elem my-tilt"
        settings={{
          base: 'window',
          reverse: true,
        }}
        style={{
          border: '1px solid #333',
        }}
      >
        <p>Hello World!</p>
      </ReactTilt>
    );

    expect(container).toMatchSnapshot();
  });
});
