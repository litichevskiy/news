import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SORT_BY = [
  {key: 'publishedAt', name: 'publish date'},
  {key: 'relevancy', name: 'relevance'},
  {key: 'popularity', name: 'popularity'},
];

class SearchByKeywords extends React.Component{

  state = {
    keyWords: '',
    sortBy: SORT_BY[0].key,
  };

  changeKeyWords = ( event ) => {
    this.setState({ keyWords: event.target.value });
  }

  submitRequest = ( event ) => {
    event.preventDefault();
    const { keyWords, sortBy } = this.state;
    console.log( keyWords, sortBy );
    this.reset();
  }

  reset() {
    this.setState({ keyWords: '', sortBy: SORT_BY[0].key });
  }

  setSort = ( event ) => {
    this.setState({ sortBy: event.target.value });
  }

  render() {
    const { keyWords, sortBy } = this.state;
    return(
      <div className='searchByKeywords'>
        <form
          className='form'
          onSubmit={this.submitRequest}>
          <label className='row'>
            <input
              className='inputSearch'
              placeholder='🔍  bitcoin, trump, IBM, etc...'
              type='text'
              autoFocus
              required
              value={keyWords}
              onChange={this.changeKeyWords}/>
          </label>
          <p className='description'>Sort by</p>
          <div className='wrapperLabels'>
            {SORT_BY.map(({ key, name }, index ) => {
              return(
                <label key={index} className='label containerInputBtn' >
                  <input
                    className='inputRadio'
                    type='radio'
                    name='sortBy'
                    onChange={this.setSort}
                    value={key}
                    checked={ sortBy === key } />
                  <span className='inputCheckbox radio'></span>
                  <span>{name}</span>
                </label>
              )
            })}
          </div>
          <p className='description'>Select date</p>
          <p>
            <span>from:</span>
            <br />
            <span>to:</span>
          </p>
          <Button
            type='submit'
            className='btn getNews'>
              Get News
          </Button>
        </form>
      </div>
    )
  }
};

SearchByKeywords.defaultProps = {

};

SearchByKeywords.propTypes = {

};

export default SearchByKeywords;