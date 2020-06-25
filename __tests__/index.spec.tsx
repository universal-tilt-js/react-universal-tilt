import React from 'react';
import { render } from '@testing-library/react';

import ReactUniversalTilt from '../src';

describe('ReactUniversalTilt', () => {
  it('should render component with default props', () => {
    const { container } = render(<ReactUniversalTilt />);

    expect(container).toMatchSnapshot();
  });

  it('should render component with custom props', () => {
    const { container } = render(<ReactUniversalTilt />);

    expect(container).toMatchSnapshot();
  });
});
