import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Root', () => {
  test('renders a header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/Image Gallery/i);
    expect(header).toBeInTheDocument();
  });
});
