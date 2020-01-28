import React, { useState, useEffect } from 'react';
import { getImages } from './api/pixelbay-api';
import ImageList from './components/image-list';

import * as styles from './app.style';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchImages() {
      const response = await getImages('building art');
      let images = [];
      response.hits.map((hit) => (
        images.push({
          url: hit.webformatURL,
          thumbnailUrl: hit.webformatURL,
          alt: hit.tags,
        })
      ))
      setData(images);
    }
    fetchImages();
  }, []);

  return (
    <div css={styles.container}>
      <ImageList images={data} />
    </div>
  );
}

export default App;
