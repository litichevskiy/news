import { DAYS, MONTHS } from '../config';
const DAY = 86400000; // day in ms
const CONFIG = { days: DAYS, months: MONTHS };
const INDEX_FIRST_MONTH = 0;
const INDEX_LAST_MONTH = 11;
const SEPARATOR_DATE = '-';

class CalendarCore {
  constructor({ date, config, from, to, separator }) {
    if( !date instanceof Date ) throw new Error('This module required Date');
    if( config ) {
      if( !config.days || config.days.length !== 7 )
        throw new Error('days must be array with 7 elements: Mon, Tue ... ');
      if( !config.months || config.months.length !== 12 )
        throw new Error('months must be array with 12 elements: Jun, Feb ... ');
    }

    this.config = config || CONFIG;
    this.separator = separator || SEPARATOR_DATE;
    this.date = (from) ? getDateWithoutHours( from ) : getDateWithoutHours( date );
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this._currentYear = this.currentYear;
    this._currentMonth = this.currentMonth;
    this.listDays = [];
    this.from = ( from ) ? getDateWithoutHours( from ).getTime() : false;
    this.to = ( to ) ? getDateWithoutHours( to ).getTime() : false;
    this.selectedDay;

    if( this.from && this.to ) {
      if( !this.from instanceof Date || !this.to instanceof Date )
        throw new Error('"from and to" must be Date');
      if( this.from > this.to )
        throw new Error('date "from" cannot be greater than date "to"');
    }
  }

  createCalendar() {
    const data = {};
    const date = new Date( this.currentYear, this.currentMonth );
    const month = this.currentMonth;
    let count = 1;
    let days = [];
    let _month;
    let day;
    let today = new Date;
    today = new Date( today.getFullYear(), today.getMonth(), today.getDate() ).getTime();

    date.setDate( 1 );
    day = date.getDay();

    if( day !== 1 ) days = days.concat( this.setPrevios( date ) );

    while( true ) {

      date.setDate( count );
      _month = date.getMonth();
      if( _month !== month ) break;
      count++;
      day = date.getDay();

      days.push({
        date: `${date}`,
        day: date.getDate(),
        isSelectedDay: ( this.selectedDay === date.getTime() ) ? true : false,
        isCurrentMonth: true,
        isBetweenFromTo: (this.from || this.to) ? this.checkDateFromTo( date ) : true,
        isToday: ( today === date.getTime() ) ? true : false,
      });
    }

    if( day !== 0 ) days = days.concat( this.setNext( date ) );
    if( this._currentMonth === this.currentMonth && this._currentYear === this.currentYear ) {
      data.currentDay = this.date.getDate();
    }

    data.month = this.config.months[ this.currentMonth ];
    data.year = this.currentYear;
    data.days = days;
    data.isNextMonth = this.isNextMonth();
    data.isPrevMonth = this.isPrevMonth();

    this.listDays = days;

    return data;
  }

  setPrevios( objDate ) {
    let date = new Date( objDate );
    const  date_ms = date.getTime();
    const days = [];
    let  count = 1;
    let day;

    while( true ) {

      date = new Date( date_ms - ( DAY * count ) );
      count++;
      day = date.getDay();
      days.push({
        date: `${date}`,
        day: date.getDate(),
        isCurrentMonth: false,
        isBetweenFromTo: (this.from || this.to) ? this.checkDateFromTo( date ) : true,
      });
      if( day === 1 ) break;
    }

    return days.reverse();
  };

  setNext( objDate ) {
    const  days = [];
    let date = objDate;
    let count = 1;
    let  day;

    date = new Date( this.currentYear, this.currentMonth + 1 );

    while( true ) {

      date.setDate( count );
      count++;
      day = date.getDay();
      days.push({
        date: `${date}`,
        day: date.getDate(),
        isCurrentMonth: false,
        isBetweenFromTo: (this.from || this.to) ? this.checkDateFromTo( date ) : true,
      });
      if( day === 0 ) break;
    }

    return days;
  };

  isNextMonth() {
    if( !this.to ) return true;

    let month;
    let year;

    if ( this.currentMonth + 1 > INDEX_LAST_MONTH ) {
        month = INDEX_FIRST_MONTH;
        year = this.currentYear + 1;
    }

    else {
      month = this.currentMonth + 1
      year = this.currentYear;
    }

    const dateTo = new Date( year, month, 1 ).getTime();

    if( dateTo < this.to ) return true;
    else return false;
  }

  isPrevMonth() {
    if( !this.from ) return true;

    let month;
    let year;

    if ( this.currentMonth - 1 < INDEX_FIRST_MONTH ) {
        month = INDEX_LAST_MONTH;
        year = this.currentYear - 1;
    }

    else {
      month = this.currentMonth - 1
      year = this.currentYear;
    }

    let day = new Date( this.from ).getDate();
    let dateCheck = new Date( year, month, day ).getTime();

    if((dateCheck <= this.to && dateCheck >= this.from)) return true;
    else return false;
  }

  setSelectedDay( date ) {
    this.selectedDay = getDateWithoutHours( date ).getTime();
  }

  deleteSelectedDay() {
    this.selectedDay = null;
  }

  setFromTo({ from, to }) {
    this.from = ( from ) ? getDateWithoutHours( from ).getTime() : false;
    this.to = ( to ) ? getDateWithoutHours( to ).getTime() : false;
  }

  nextMonth () {
    this.currentMonth++;
    this.isChangeYaer();
  }

  previousMonth () {
    this.currentMonth--;
    this.isChangeYaer();
  }

  isChangeYaer() {
    if( this.currentMonth > INDEX_LAST_MONTH ) {
      this.currentMonth = INDEX_FIRST_MONTH, this.currentYear++;
    }
    if( this.currentMonth < INDEX_FIRST_MONTH ) {
      this.currentMonth = INDEX_LAST_MONTH, this.currentYear--;
    }
  }

  nextYear() {
    this.currentYear++;
  }

  previousYear() {
    this.currentYear--;
  }

  checkDateFromTo( date ) {
    let result = true;
    const dateInMs = date.getTime();

    if( this.from && this.to ) {
      if( dateInMs >= this.from && dateInMs <= this.to ) result = true;
      else result = false;
    }
    else{
      if( this.from ) {
        if( dateInMs >= this.from ) result = true;
        else result = false;
      }
      else{
        if( this.to ) {
          if( dateInMs <= this.to ) result = true;
          else result = false;
        }
      }
    }

    return result;
  }

  getFormatedDate( date ) {
    const { year, month, day } = formatDate( date );
    return `${year}${this.separator}${month}${this.separator}${day}`;
  }
};

const getDateWithoutHours = ( date ) => (
  new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )
);

const formatDate = ( date ) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return{ year, month: addZero( month ), day: addZero( day ) };
};

const addZero = ( num ) => ( num < 10 ) ? `0${num}`: num;

export default CalendarCore;