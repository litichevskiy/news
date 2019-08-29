import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import formatDate from '../utils/formatDate';

const News = ({
  isUploadImages,
  news: {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    source:{
      id,
      name
    }
  }}) => {
  const { year, month, day, fullDateISO, hours, minutes } =
    formatDate(new Date( publishedAt));
  return(
    <li className='news'>
      <time
        className='publishDate'
        dateTime={fullDateISO}>
          published:  {`${hours}:${minutes}  ${day} ${month} ${year}`}
      </time>
      { isUploadImages &&
        <a
        className='readMoreNewsLinkForImage outline-focus'
        target='_blank'
        href={url}>
        <Image
          className='newsImage'
          src={urlToImage}
          alt={title}
          title={title} />
        <div className='wrapper'></div>
        </a>
      }
      <p className='author'>
        <small>autor:</small>
        {author}
      </p>
      <h4 className='newsTitle'>{title}</h4>
      <h5 className='description'>{description}</h5>
      <p className='content'>{content}</p>
      <div className='linkReadMoreNewsContainer'>
        <a
          className='linkReadMoreNews outline-focus'
          target='_blank'
          title='learn more'
          href={url}>
            learn more
        </a>
      </div>
    </li>
  )
};

News.defaultProps = {};
News.propTypes = {
  // isUploadImages: PropTypes.bool.isRequired,
};

export default News;