import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';

import * as styles from './image-list.style';


const ImageList = ({ images }) => {
    return (
        <div css={styles.imageGrid}>
            {images.map((item, idx) => (
                <Image url={item.thumbnailUrl} alt={item.alt} key={idx} />
            ))}
        </div>
    );
}

ImageList.defaultProps = {
    images: [],
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    })),
};

export default ImageList;