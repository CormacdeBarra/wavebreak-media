import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './image.style';

const Image = ({ url, alt }) => {
    return (
        <div css={styles.image} data-testid='image-item'>
            <img data-testid='image-tag' src={url} alt={alt} />
        </div>
    );
}

Image.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;