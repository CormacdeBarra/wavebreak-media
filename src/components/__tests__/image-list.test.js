import React from 'react';
import { render } from '@testing-library/react';
import ImageList from '../image-list';

describe('Image List', () => {
  test('renders an <li> for each image in the array', () => {
    const images = [
        {
            url: 'https://test.url1',
            alt: 'alt1',
        },
        {
            url: 'https://test.url2',
            alt: 'alt2',
        }
    ];
    const { getAllByTestId } = render(<ImageList images={images}/>);
    const liTags = getAllByTestId(/image-list-item/i);
    const imgTags = getAllByTestId(/image-tag/i);
    expect(liTags.length).toEqual(2);
    expect(imgTags.length).toEqual(2);
  });
});
