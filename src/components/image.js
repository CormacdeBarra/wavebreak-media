import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, alt }) => {
    return (
        <img data-testid='image-tag' src={url} alt={alt} />
    );
}

Image.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;