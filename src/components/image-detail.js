import React from 'react';

import * as styles from '../app.style';
import * as imageDetailStyles from './image-detail.style';

const ImageDetail = (props) => {
    if (!props.location.state) {
        return (<></>);
    }
    const { 
        largeImageURL,
        tags,
        downloads,
        imageSize,
        user,
        views,
    } = props.location.state;

    return (
        <div css={styles.container}>
            <div css={styles.header}>
                Image Details
            </div>
            <div css={imageDetailStyles.wrapper}>
                <div css={imageDetailStyles.left}>
                    <img src={largeImageURL} alt={tags} />
                </div>
                <div css={imageDetailStyles.right}>
                    <div css={imageDetailStyles.row}>
                        <label css={imageDetailStyles.label}>Photographer: </label>
                        <span css={imageDetailStyles.value}>{user}</span>
                    </div>
                    <div css={imageDetailStyles.row}>
                        <label css={imageDetailStyles.label}>Tags: </label>
                        <span css={imageDetailStyles.value}>{tags}</span>
                    </div>
                    <div>
                        <label css={imageDetailStyles.label}>Downloads: </label>
                        <span css={imageDetailStyles.value}>{downloads}</span>
                    </div>
                    <div>
                        <label css={imageDetailStyles.label}>Views: </label>
                        <span css={imageDetailStyles.value}>{views}</span>
                    </div>
                    <div>
                        <label css={imageDetailStyles.label}>Size: </label>
                        <span css={imageDetailStyles.value}>{imageSize}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageDetail;