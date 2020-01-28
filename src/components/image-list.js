import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';

const ImageList = ({ images }) => {
    return (
        <ul>
            {images.map((item, idx) => (
            <li data-testid='image-list-item' key={idx} >
                <Image url={item.url} alt={item.alt} />
            </li>
            ))}
        </ul>
    );
}

ImageList.defaultProps = {
    images: [],
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    })),
};

export default ImageList;