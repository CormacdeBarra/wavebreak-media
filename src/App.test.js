import React from 'react';
import { render } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import App from './App';

describe('App Root', () => {
  test('renders a header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/Image Gallery/i);
    expect(header).toBeInTheDocument();
  });

  test('should call fetchPixelBayImages on load', async () => {
    const getPixelBayImages = jest.fn().mockResolvedValueOnce({ hits: []})
    const props = {
        getPixelBayImages,
    };

    await act(async () => {
        renderer.create(<App {...props}></App>);
    });
    expect(props.getPixelBayImages).toHaveBeenCalledTimes(1);
  });
});
