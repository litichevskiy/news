import React from 'react';
import PropTypes from 'prop-types';
import publishers from './../publishers';
import getParentNode from './../utils/getParentNode';

class PublisherList extends React.Component{

  clickHandler = ( event ) => {
    const target = getParentNode( event.target, 'li' );
    const key = target.getAttribute('data-key');
    if( !key ) throw new Error(`key ${key} can't be undefined`);
    console.log( key );
  }

  render() {
    return(
      <ul className='publisherList wrapperTabContent'>{
        publishers.map(( item, index ) => {
          const { publisher, key } = item
          return (
            <li
              key={index}
              className='publisher'
              data-key={key}
              onClick={this.clickHandler}>
                <span className='alphabetLetter'>{publisher.charAt(0)}</span>
                {publisher}
            </li>
          )
        })
      }</ul>
    )
  }
}

PublisherList.defaultProps = {};
PublisherList.propTypes = {};

export default PublisherList;