import React from 'react';
import { Link  } from 'react-router-dom'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './image';
import { getImages } from '../api/pixelbay-api';

import * as styles from '../app.style';
import * as resultStyles from './results.style';

class Results extends React.Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidMount() {
    try {
        this.fetchImages(this.state.page);
    } catch (error) {
        console.error(error);
    }
  }

 fetchImages = async (page = 1) => {
    const { images } = this.state;
    const { getPixelBayImages } = this.props;
    const response = await getPixelBayImages('building art', page);
    this.setState({
        images: [...images, ...response.hits],
        page:  page + 1,
    })
  };

  render() {
    const { page, images } = this.state
    return (
        <div css={styles.container}>
          <div css={styles.header}>Image Gallery</div>
          <InfiniteScroll
            dataLength={images.length}
            next={() => this.fetchImages(page)}
            hasMore={true}
            loader={<img src="./static/loading.gif" alt="loading" />}
          >
            <div css={resultStyles.imageGrid}>
                {images.map((item, idx) => (
                    <div className="grid-item" key={idx}>
                        <Link
                            to={{
                                pathname: `/image/${item.id}`,
                                state: item 
                            }}
                            key={idx}
                        >
                            <Image url={item.webformatURL} alt={item.tags} key={idx} />
                        </Link>
                        {/* <a href={`/image/${item.id}`}>
                            <Image url={item.webformatURL} alt={item.tags} key={idx} />
                        </a> */}
                    </div>
                ))}
            </div>
            
          </InfiniteScroll>
        </div>
      );
  }
}

Results.defaultProps = {
  getPixelBayImages: getImages,
}

Results.propTypes = {
  getPixelBayImages: PropTypes.func,
};

export default Results;
