import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';
import Button from './Button';
import Calendar from './Calendar';
import { MAX_TIME_SEARCH_ARTICLES } from '../config';
import { IconCalendar } from './icons';

const DAY = 86400000; // day in ms
const MAX_QUANTITY_DAYS = DAY * MAX_TIME_SEARCH_ARTICLES;
const SORT_BY = [
  {key: 'publishedAt', name: 'publish date'},
  {key: 'relevancy', name: 'relevance'},
  {key: 'popularity', name: 'popularity'},
];

class SearchByKeywords extends React.Component{

  state = {
    keyWords: '',
    sortBy: SORT_BY[0].key,
    dateFrom: new Date( Date.now() - ( MAX_QUANTITY_DAYS ) ),
    dateTo: new Date,
    _dateFrom: new Date( Date.now() - ( MAX_QUANTITY_DAYS ) ), //date memory from
    _dateTo: new Date, //date memory to,
    isOpenFrom: false,
    isOpenTo: false,
  };

  isSetDateFrom = false;
  isSetDateTo = false;

  selectDateFrom = ( date ) => {
    if( date ) {
      this.setState({ dateFrom: date });
      this.isSetDateFrom = true;
    }
    else {
     this.setState({ dateFrom: this.state._dateFrom });
     this.isSetDateFrom = false;
    }
  }

  selectDateTo = ( date ) => {
    if( date ) {
      this.setState({ dateTo: date });
      this.isSetDateTo = true;
    }
    else{
      this.setState({ dateTo: this.state._dateTo });
      this.isSetDateTo = false;
    }
  }

  changeKeyWords = ({ target: { value } }) => {
    this.setState({ keyWords: value });
  }

  submitRequest = ( event ) => {
    event.preventDefault();

    const { keyWords, sortBy, dateFrom, dateTo } = this.state;
    let from;
    let to;

    if( this.isSetDateFrom || this.isSetDateTo ) {
      from = formatDate( dateFrom ).fullDateISO;
      to = formatDate( dateTo ).fullDateISO;
    }
    else{
      from = formatDate( new Date ).fullDateISO;
      to = formatDate( new Date ).fullDateISO;
    }
    // console.log({ from, to, keyWords, sortBy });
    const query = `?q=${keyWords}&from=${from}&to=${to}&sortBy=${sortBy}`;
    console.log( query )
    this.reset();
  }

  reset() {
    const { _dateFrom, _dateTo } = this.state;
    this.setState({
      keyWords: '',
      sortBy: SORT_BY[0].key,
      dateFrom: _dateFrom,
      dateTo: _dateTo,
      isOpenFrom: false,
      isOpenTo: false,
    });

    this.isSetDateFrom = false;
    this.isSetDateTo = false;
  }

  setSortSortBy = ({target: { value }}) => {
    this.setState({ sortBy: value });
  }

  openCloseCalendarFrom = () => {
    this.setState({ isOpenFrom: !this.state.isOpenFrom });
  }

  openCloseCalendarTo = () => {
    this.setState({ isOpenTo: !this.state.isOpenTo });
  }

  render() {
    const { keyWords, sortBy, dateFrom, dateTo, isOpenTo, isOpenFrom } = this.state;
    return(
      <div className='searchByKeywords wrapperTabContent'>
        <form className='form' onSubmit={this.submitRequest}>
          <div className='rowForSettings'>
            <label className='containerInput'>
              <input
                className='inputSearch'
                placeholder='🔍  Bitcoin, IBM, etc...'
                type='text'
                required
                value={keyWords}
                onChange={this.changeKeyWords}/>
            </label>
            <p className='description'>Sort by</p>
            {SORT_BY.map(({ key, name }, index ) => {
              return(
                <label key={index} className='containerInputRadio' >
                  <input
                    className='inputRadio'
                    type='radio'
                    name='sortBy'
                    onChange={this.setSortSortBy}
                    value={key}
                    checked={ sortBy === key } />
                  <span className='inputCheckbox radio'></span>
                  <span>{name}</span>
                </label>
              )
            })}
          </div>
          <div className='rowForSettings'>
            <p className='description'>
              Select publish dates
              <small>
                {`Default today. Maximum range ${MAX_TIME_SEARCH_ARTICLES} days.`}
              </small>
            </p>
            <p className='description'>From</p>
            { !isOpenFrom &&
              <Button
                className='btn openCalendar'
                onClick={this.openCloseCalendarFrom}>
                  <span>today</span>
                  <IconCalendar className='icon-calendar' />
              </Button>
            }
            { isOpenFrom &&
              <Calendar
                from={dateFrom}
                to={dateTo}
                closeCalendar={this.openCloseCalendarFrom}
                selectDate={this.selectDateFrom}/>
            }
            <p className='description'>To</p>
            { !isOpenTo &&
              <Button
                className='btn openCalendar'
                onClick={this.openCloseCalendarTo}>
                  <span>today</span>
                  <IconCalendar className='icon-calendar' />
              </Button>
            }
            { isOpenTo &&
              <Calendar
                from={dateFrom}
                to={dateTo}
                closeCalendar={this.openCloseCalendarTo}
                selectDate={this.selectDateTo} />
            }
          </div>
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

SearchByKeywords.defaultProps = {};
SearchByKeywords.propTypes = {};

export default SearchByKeywords;