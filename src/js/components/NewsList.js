import React from 'react';
import PropTypes from 'prop-types';
import News from './News';
import Button from './Button';
import LazyLoad from 'vanilla-lazyload';

class NewsList extends React.Component{

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
    const { isUploadImages } = this.props;
    if( isUploadImages !== prevProps.isUploadImages ){
      if( isUploadImages ) this.lazyLoadInstance.update();
    }
  }

  render() {
    const { newsList, isUploadImages } = this.props;
    return(
      <div className='containerListNews'>
        <ul className='newsList'>{
          newsList.map(( newsItem, index ) => {
            return <News key={index} news={newsItem} isUploadImages={isUploadImages}/>
          })
        }</ul>
        <Button
          className='btn loadMore'
          title='Load more news'
          onClick={() => console.log('load more')}>
            Load More
        </Button>
      </div>
    )
  }
};

NewsList.defaultProps = {};
NewsList.propTypes = {};

export default NewsList;