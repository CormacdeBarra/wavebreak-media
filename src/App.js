import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getImages } from './api/pixelbay-api';
import ImageList from './components/image-list';

import * as styles from './app.style';

function App() {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchImages(page = 1) {
    const response = await getImages('building art', page);
    setPage(page + 1);
    setImages([...images, ...response.hits]);
    setIsLoaded(true);
  }

  useEffect(() => {  
    fetchImages();
  }, []);

  return (
    <InfiniteScroll
      dataLength={images}
      next={() => fetchImages(page)}
      hasMore={true}
      loader={<img src="./static/loading.gif" alt="loading" />}
    >
      <div css={styles.container}>
        <ImageList images={images} />
      </div>
    </InfiniteScroll>
  );
}

export default App;
