import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, alt }) => {
    return (
        <div className='image-item' data-testid='image-item'>
            <img data-testid='image-tag' src={url} alt={alt} />
        </div>
    );
}

Image.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;