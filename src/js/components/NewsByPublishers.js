import React from 'react';
import PropTypes from 'prop-types';
import getParentNode from './../utils/getParentNode';
import InputRadio from './InputRadio';
import Button from './Button';
import { IconClose } from './icons';

const MAXIMUM_PUBLISHERS = 10;

class NewsByPublishers extends React.Component{

  state = {
    // tabName: this.props.tabName,
    publishers: this.props.publishers,
    selectedPublihers: [],
  };

  addPublisher = ( event ) => {
    event.preventDefault();
    const { publishers, selectedPublihers } = this.state;

    if( selectedPublihers.length === MAXIMUM_PUBLISHERS ) return;

    const item = getParentNode( event.target, 'li' );
    const index = +item.getAttribute('data-index');
    const publisher = publishers[index];

    if( !selectedPublihers.includes( publisher ) ) {
      this.setState({selectedPublihers: selectedPublihers.concat( publisher ) });
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
    let query = 'sources=';
    query = selectedPublihers.reduce(( query, publisher ) => {
      return query += `${publisher.key},`;
    }, query);
    this.clear();
    console.log( 'request ', query );
  }

  clear() {
    this.setState({ selectedPublihers: [] });
  }

  render() {
    const { publishers, selectedPublihers } = this.state;

    return (
      <div className='newsByPublishers wrapperTabContent'>
        <p className='description'>select maximum {MAXIMUM_PUBLISHERS}</p>
        <ul className='selectedPublihersList'>
          {selectedPublihers.map(( { publisher }, index ) => {
            return(
              <li
                className='selectedPublihersItem'
                key={index}
                data-index={index}>
                  {publisher}
                  <span
                    className='delete'
                    onClick={this.deletePublisher}>
                    <IconClose className='icon-close'/>
                  </span>
              </li>
            )
          })}
        </ul>
        { selectedPublihers.length > 0 &&
          <Button
            onClick={this.getNews}
            className='btn getNews'
            title='Get news'>
            Get news
          </Button>
        }
        <ul className='publisherList'>{
          publishers.map(( item, index ) => {
            const { publisher, key } = item
            return (
              <li
                key={index}
                className='publisher'
                data-index={index}
                onClick={this.addPublisher}>
                  <a
                    href=''
                    className='linkItemList'>
                    <span className='alphabetLetter'>{publisher.charAt(0)}</span>
                    {publisher}
                  </a>
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
};

NewsByPublishers.defaultProps = {};

NewsByPublishers.propTypes = {
  publishers: PropTypes.array.isRequired,
};

export default NewsByPublishers;