import React from 'react';
import { render } from '@testing-library/react';

import ReactUniversalTilt from '../src';

describe('ReactUniversalTilt', () => {
  it('should render component', () => {
    const { container } = render(<ReactUniversalTilt />);

    expect(container).toMatchSnapshot();
  });
});
