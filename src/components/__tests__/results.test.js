import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import Results from '../results';

describe('Results', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders an <li> for each image in the array', async () => {
    const images = [
        {
            webformatURL: 'https://test.url1',
            tags: 'alt1',
        },
        {
            webformatURL: 'https://test.url2',
            tags: 'alt2',
        }
    ];
    const getPixelBayImages = jest.fn().mockResolvedValueOnce({ hits: images})
    const props = {
      getPixelBayImages,
    };

    const root = TestRenderer.create(<Results {...props}></Results>).root;
    expect(root.findAllByProps({'data-testid': 'image-item'}).length === 2)
  });

  test('should call fetchPixelBayImages on load', async () => {
    const getPixelBayImages = jest.fn().mockResolvedValueOnce({ hits: []})
    const props = {
        getPixelBayImages,
    };
    TestRenderer.create(<Results {...props}></Results>).root;
    expect(props.getPixelBayImages).toHaveBeenCalledTimes(1);
  });
});
