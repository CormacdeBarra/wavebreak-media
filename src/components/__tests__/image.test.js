import React from 'react';
import { render } from '@testing-library/react';
import Image from '../image';

describe('Image', () => {
  test('renders img tag', () => {
    const { getByTestId } = render(<Image url="http://test.url" alt="alt" />);
    const imgTag = getByTestId(/image-tag/i);
    expect(imgTag).toBeTruthy();
  });
});
