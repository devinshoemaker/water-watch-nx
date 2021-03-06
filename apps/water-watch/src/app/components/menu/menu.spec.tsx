import React from 'react';
import { render } from '@testing-library/react';

import Menu from './menu';

describe('Menu', () => {
  it('should render without crashing', () => {
    render(<Menu />);
  });

  it('should have title', () => {
    const { getByText } = render(<Menu />);
    getByText('Menu');
  });

  it('should list pages', () => {
    const { getByText } = render(<Menu />);
    getByText('Home');
    getByText('Settings');
  });
});
