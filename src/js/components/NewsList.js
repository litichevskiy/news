import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ newsList, isUploadImages }) => (
  <ul className='newsList'>{
    newsList.map(( newsItem, index ) => {
      return <News key={index} news={newsItem} isUploadImages={isUploadImages}/>
    })
  }</ul>
);

NewsList.defaultProps = {};
NewsList.propTypes = {};

export default NewsList;