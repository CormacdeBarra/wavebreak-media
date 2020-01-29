import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getImages } from './api/pixelbay-api';
import ImageList from './components/image-list';

import * as styles from './app.style';

function App({ getPixelBayImages }) {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchImages(page = 1) {
    const response = await getPixelBayImages('building art', page);
    setPage(page + 1);
    setImages([...images, ...response.hits]);
    setIsLoaded(true);
  }

  useEffect(() => {  
    fetchImages();
  }, []);

  return (
    <div css={styles.container}>
      <div css={styles.header}>Image Gallery</div>
      <InfiniteScroll
        dataLength={images}
        next={() => fetchImages(page)}
        hasMore={true}
        loader={<img src="./static/loading.gif" alt="loading" />}
      >
        {loaded ?    
          <ImageList images={images} />
        : <></>}
      </InfiniteScroll>
    </div>
  );
}

App.defaultProps = {
  getPixelBayImages: getImages,
}

App.propTypes = {
  getPixelBayImages: PropTypes.func,
};

export default App;
