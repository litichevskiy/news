import React from 'react';
import PropTypes from 'prop-types';
import News from './News';
import Button from './Button';
import Preloader from './Preloader';
import LazyLoad from 'vanilla-lazyload';

class ContainerNews extends React.Component{

  state = {
    isUploadImages: this.props.isUploadImages,
  };

  lazyLoadInstance = null;

  componentDidMount() {
    this.lazyLoadInstance = new LazyLoad({ elements_selector: '.lazy' });
  }

  componentWillUnmount() {
    this.lazyLoadInstance = null;
  }

  componentDidUpdate( prevProps ) {
    const { isUploadImages, listNews } = this.props;
    if( listNews.length > 0 && isUploadImages ) this.lazyLoadInstance.update();
  }

  loadMoreNews = () => {
    const { lastQueryForNews, getMoreNews } = this.props;
    getMoreNews( lastQueryForNews );
  }

  render() {
    const { listNews, isUploadImages, isLoadingNews, isLoadMoreNews, totalNews } = this.props;

    return(
      <main className='containerListNews'>
        <ul className='newsList'>{
          listNews.map(( newsItem, index ) => {
            return <News key={index} news={newsItem} isUploadImages={isUploadImages}/>
          })
        }</ul>
        { totalNews === 0 && <h2 className='notFound'>Not found</h2> }
        { isLoadingNews &&
          <div className='wrapperPreloader'>
            <Preloader fill={'#267CB5'} />
          </div>
        }
        { isLoadMoreNews &&
          <Button
            className='btn loadMore'
            title='Load more news'
            onClick={this.loadMoreNews}>
              Load More
          </Button>
        }
      </main>
    )
  }
};

ContainerNews.defaultProps = {
  listNews: [],
};

ContainerNews.propTypes = {
  listNews: PropTypes.array.isRequired,
  isUploadImages: PropTypes.bool.isRequired,
  isLoadingNews: PropTypes.bool.isRequired,
  isLoadMoreNews: PropTypes.bool.isRequired,
  totalNews: PropTypes.number,
};

export default ContainerNews;