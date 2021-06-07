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
        rel='noopener'
        href={url}>
        <Image
          className='newsImage'
          src={urlToImage}
          alt={title}
          title={title} />
        <div className='wrapper'></div>
        </a>
      }
      { name && <span className="source">{name}</span> }
      { author && <p className='author'><small>author:</small>{author}</p> }
      <h4 className='newsTitle'>{title}</h4>
      <h5 className='description'>{description}</h5>
      <p className='content'>{content}</p>
      <div className='linkReadMoreNewsContainer'>
        <a
          className='linkReadMoreNews outline-focus link'
          target='_blank'
          rel='noopener'
          title='learn more'
          href={url}>
            learn more
        </a>
      </div>
    </li>
  )
};

News.defaultProps = {
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  content: '',
  id: '',
  name: '',
  isUploadImages: '',
};

News.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]).isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isUploadImages: PropTypes.bool.isRequired,
};

export default News;