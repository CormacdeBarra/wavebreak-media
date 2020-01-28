import React, { useState, useEffect } from 'react';
import './app.css';
import { getImages } from './api/pixelbay-api';
import ImageList from './components/image-list';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getImages('building art');
      let images = [];
      response.hits.map((hit) => {
        images.push({
          url: hit.imageURL,
          alt: hit.tags,
        });
      })
      setData(images);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <ImageList images={data} />
    </div>
  );
}

export default App;
