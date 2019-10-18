import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';
import Button from './Button';
import Calendar from './Calendar';
import ErrorMessage from './ErrorMessage';
import { MAX_TIME_SEARCH_ARTICLES, NEWS_API, EVERYTHING } from '../config';
import { IconCalendar } from './icons';
import InputRadio from './InputRadio';

const REG_EXP_IS_MATCH_SYMBOL = new RegExp('[a-z]|[0-9]', 'ig');
const NOT_EMPTY = `This field can't be empty`;
const MUST_CONTAIN = 'This field must contain letters (english) or numbers';
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
    selectedFrom: null,
    selectedTo: null,
    isOpenTo: false,
    isErrorKeyWords: false,
    errorMessage: '',
  };

  isSetDateFrom = false;
  isSetDateTo = false;

  selectDateFrom = ( date ) => {
    if( date ) {
      this.setState({ dateFrom: date, selectedFrom: date });
      this.isSetDateFrom = true;
    }
    else {
     this.setState({ dateFrom: this.state._dateFrom, selectedFrom: null });
     this.isSetDateFrom = false;
    }
  }

  selectDateTo = ( date ) => {
    if( date ) {
      this.setState({ dateTo: date, selectedTo: date });
      this.isSetDateTo = true;
    }
    else{
      this.setState({ dateTo: this.state._dateTo, selectedTo: null });
      this.isSetDateTo = false;
    }
  }

  changeKeyWords = ({ target: { value } }) => {
    this.setState({ keyWords: value, isErrorKeyWords: false, errorMessage: '' });
  }

  submitRequest = ( event ) => {
    event.preventDefault();

    if( !this.validationKeyWords( event ) ) return;

    const { keyWords, sortBy, dateFrom, dateTo } = this.state;
    const { urlPath, getNews, quantityNews } = this.props
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
    const query = `?q=${keyWords.trim()}&from=${from}&to=${to}&sortBy=${sortBy}&language=en&pageSize=${quantityNews}`;
    this.reset();
    getNews(`${urlPath}${encodeURI(query)}`);
  }

  validationKeyWords({ target }) {
    const { keyWords } = this.state;

    if( !keyWords.trim() ) {
      (target.querySelector('input[name="key-words"]')).focus();
      this.setState({ isErrorKeyWords: true, errorMessage: NOT_EMPTY });
      return false;
    }

    if( !keyWords.match( REG_EXP_IS_MATCH_SYMBOL ) ) {
      (target.querySelector('input[name="key-words"]')).focus();
      this.setState({ isErrorKeyWords: true, errorMessage: MUST_CONTAIN });
      return false;
    }

    else return true;
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
      isErrorKeyWords: false,
      selectedFrom: null,
      selectedTo: null
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
    const { keyWords, sortBy, dateFrom, dateTo, isOpenTo, isOpenFrom, isErrorKeyWords, errorMessage,
    selectedFrom, selectedTo } = this.state;
    return(
      <div className='searchByKeywords wrapperTabContent'>
        <form className='form' onSubmit={this.submitRequest}>
          <div className='rowForSettings'>
            <label className='containerInput'>
              <input
                className={isErrorKeyWords ? 'inputSearch notValid' : 'inputSearch'}
                placeholder='🔍  Bitcoin, IBM, etc...'
                type='text'
                name='key-words'
                value={keyWords}
                onChange={this.changeKeyWords}/>
              { isErrorKeyWords && <ErrorMessage message={errorMessage} /> }
            </label>
            <small className='smallText'>only english letters</small>
            <p className='description'>Sort by</p>
            {SORT_BY.map(({ key, name }, index ) => {
              return(
                <InputRadio
                  key={index}
                  labelClass='containerInputRadio'
                  inputClass='inputRadio'
                  name={'sortBy'}
                  value={key}
                  onChange={this.setSortSortBy}
                  checked={sortBy === key}
                  content={<span>{name}</span>}/>
              )
            })}
          </div>
          <div className='rowForSettings'>
            <p className='description'>
              Select publish dates
              <small className='smallText'>
                {`Default today. Maximum range ${MAX_TIME_SEARCH_ARTICLES} days.`}
              </small>
            </p>
            <p className='description'>From</p>
            { !isOpenFrom &&
              <Button
                className='btn openCalendar'
                onClick={this.openCloseCalendarFrom}>
                {createDateForRead( selectedFrom )}
                  <IconCalendar className='icon-calendar' />
              </Button>
            }
            { isOpenFrom &&
              <Calendar
                from={dateFrom}
                to={dateTo}
                closeCalendar={this.openCloseCalendarFrom}
                selectDate={this.selectDateFrom}
                selectedDate={selectedFrom}/>
            }
            <p className='description'>To</p>
            { !isOpenTo &&
              <Button
                className='btn openCalendar'
                onClick={this.openCloseCalendarTo}>
                {createDateForRead( selectedTo )}
                  <IconCalendar className='icon-calendar' />
              </Button>
            }
            { isOpenTo &&
              <Calendar
                from={dateFrom}
                to={dateTo}
                closeCalendar={this.openCloseCalendarTo}
                selectDate={this.selectDateTo}
                selectedDate={selectedTo} />
            }
            <Button
              type='submit'
              className='btn getNews'
              title='Get News'>
                Get News
            </Button>
          </div>
        </form>
      </div>
    )
  }
};

SearchByKeywords.defaultProps = {
  urlPath: `${NEWS_API}${EVERYTHING}`,
};
SearchByKeywords.propTypes = {
  urlPath: PropTypes.string,
};

const createDateForRead = ( date ) => {
  if( !date ) return <span className='selectedDate'>today</span>;
  const { year, month, day, fullDateISO } = formatDate( date );
  return <time className='selectedDate' datetime={fullDateISO}>{day} {month} {year}</time>
};

export default SearchByKeywords;