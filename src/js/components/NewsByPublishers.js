import React from 'react';
import PropTypes from 'prop-types';
import getParentNode from './../utils/getParentNode';
import Button from './Button';
import { NEWS_API, TOP_HEADLINES } from '../config';

const MAXIMUM_PUBLISHERS = 10;

class NewsByPublishers extends React.Component{

  state = {
    publishers: this.props.publishers,
    selectedPublihers: [],
  };

  addPublisher = ( event ) => {
    event.preventDefault();

    const { publishers, selectedPublihers } = this.state;
    const isAdd = selectedPublihers.length < MAXIMUM_PUBLISHERS;
    const item = getParentNode( event.target, 'li' );
    const index = +item.getAttribute('data-index');
    const publisher = publishers[index];

    if( !selectedPublihers.includes( publisher ) && isAdd ) {
      this.setState({selectedPublihers: selectedPublihers.concat( publisher ) });
    }
    else{
      this.setState({selectedPublihers: selectedPublihers.filter( item => item !== publisher ) });
    }
  }

  deletePublisher = ({ target }) => {
    const { selectedPublihers } = this.state;
    const item = getParentNode( target, 'li' );
    const index = +item.getAttribute('data-index');
    selectedPublihers.splice( index, 1 );
    this.setState({selectedPublihers: selectedPublihers });
  }

  getNews = () => {
    const { selectedPublihers } = this.state;
    const { getNews, urlPath, quantityNews } = this.props;
    let query = '?sources=';
    query = selectedPublihers.reduce(( query, publisher ) => {
      return query += `${publisher.key},`;
    }, query);
    query = query.slice(0, -1);
    getNews(`${urlPath}${query}&pageSize=${quantityNews}`);
    this.clear();
  }

  clear() {
    this.setState({ selectedPublihers: [] });
  }

  render() {
    const { publishers, selectedPublihers } = this.state;
    const selectedPublihersLength = selectedPublihers.length;
    return (
      <div className='newsByPublishers wrapperTabContent'>
        <p className='description'>
          select maximum {MAXIMUM_PUBLISHERS - selectedPublihersLength}
        </p>
        <Button
          disabled={!selectedPublihersLength ? true : false}
          onClick={this.getNews}
          className='btn getNews'
          title='Get news'>
            Get news
        </Button>
        <div className='listWrapper'>
          <ul className='publisherList'>{
            publishers.map(( item, index ) => {
              const { publisher, key } = item;
              const className = selectedPublihers.includes( item ) ?
              'linkItemList selected': 'linkItemList';
              return (
                <li
                  key={index}
                  className='publisher'
                  data-index={index}
                  onClick={this.addPublisher}>
                    <a
                      href=''
                      className={className}>
                      <span className='alphabetLetter'>{publisher.charAt(0)}</span>
                      {publisher}
                    </a>
                </li>
              )
            })
          }</ul>
        </div>
      </div>
    )
  }
};

NewsByPublishers.defaultProps = {
  urlPath: `${NEWS_API}${TOP_HEADLINES}`,
};

NewsByPublishers.propTypes = {
  publishers: PropTypes.array.isRequired,
  urlPath: PropTypes.string,
};

export default NewsByPublishers;