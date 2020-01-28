import React from 'react';
import { render } from '@testing-library/react';
import ImageList from '../image-list';

describe('Image List', () => {
  test('renders an <li> for each image in the array', () => {
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
    const { getAllByTestId } = render(<ImageList images={images}/>);
    const liTags = getAllByTestId(/image-item/i);
    const imgTags = getAllByTestId(/image-tag/i);
    expect(liTags.length).toEqual(2);
    expect(imgTags.length).toEqual(2);
  });
});
