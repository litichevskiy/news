import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';
import Button from './Button';
import CalendarCore from '../utils/CalendarCore';
import { IconArrowRight, IconArrowLeft, IconClose } from './icons';
import { DAYS, MONTHS } from '../config';

class Calendar extends React.Component{

  state = {
    date: this.props.date,
    month: '',
    year: '',
    currentDay: this.props.date.getDate(),
    selectedDay:'',
    selectedDateISO: '',
    selectedDateForRead: '',
    days: [],
    from: this.props.from,
    to: this.props.to,
    isNextMonth: true,
    isPrevMonth: true,
  }

  calendar = null;

  componentDidMount() {
    const { date, from, to, config, selectedDate } = this.props;
    this.calendar = new CalendarCore({ date, from, to, config, selectedDay: selectedDate });

    if( selectedDate ) {

      const { year, monthIndex, day, fullDateISO} = formatDate( new Date( selectedDate ) );

      this.setState({
        selectedDateForRead: `${day} ${MONTHS[monthIndex]}   ${year} `,
        selectedDateISO: fullDateISO,
        selectedDay: String( selectedDate )
      });

      this.calendar.setSelectedDay( selectedDate );
    }

    this.updateCalendar();
  }

  componentWillUnmount() {
    this.calendar = null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const { from, to, date } = this.props;
    const prevFrom = prevProps.from;
    const prevTo = prevProps.to;

    if( from.getTime() !== prevFrom.getTime() || to.getTime() !== prevTo.getTime() ) {
      this.calendar.setFromTo({from, to});
      const selectedDay = this.state.selectedDay;
      if( selectedDay ) this.calendar.setSelectedDay( new Date( selectedDay ) );

      this.updateCalendar();
    }
  }

  openCloseCalendar = () => {
    this.props.closeCalendar();
  }

  setDate = ({ target }) => {

    if( target.tagName === 'UL' ) return;

    const index = +target.getAttribute('data-index');
    const { selectedDay, days } = this.state;
    const { isCurrentMonth, isBetweenFromTo } = days[index];

    if( selectedDay === days[index].date ) {

      const { from, date } = this.state;
      this.calendar.deleteSelectedDay();
      this.calendar.deleteSelectedDay();
      this.setState({ selectedDay: '', selectedDateForRead: '', selectedDateISO: '' });
      this.props.selectDate();
      return
    }
    if( !isCurrentMonth || !isBetweenFromTo ) return;

    const selectedDate = days[index].date;
    if( !selectedDay || selectedDay !== selectedDate ) {

      const selectedDate = days[index].date;
      const { year, monthIndex, day, fullDateISO } = formatDate( new Date( selectedDate ) );
      const selectedDateForRead = `${day} ${MONTHS[monthIndex]}   ${year}`;

      this.calendar.setSelectedDay( new Date( selectedDate ) );
      this.setState({
        selectedDay: selectedDate,
        selectedDateForRead: selectedDateForRead,
        selectedDateISO: fullDateISO,
      });

      this.props.selectDate( new Date( selectedDate ) );
    }

    else{
      this.calendar.deleteSelectedDay();
      this.setState({ selectedDay: '', selectedDateForRead: '', selectedDateISO: '' });
    }

    this.updateCalendar();
  }

  nextMonth = () => {
    this.calendar.nextMonth();
    if( !this.state.isNextMonth ) return;
    this.updateCalendar();
  }

  previousMonth = () => {
    if( !this.state.isPrevMonth ) return;
    this.calendar.previousMonth();
    this.updateCalendar();
  }

  updateCalendar() {
    const { days, month, year, currentDay, isNextMonth, isPrevMonth } = this.calendar.createCalendar();
    this.setState({
      days: days,
      month: month,
      year: year,
      currentDay: currentDay,
      isNextMonth:isNextMonth,
      isPrevMonth:isPrevMonth,
    });
  }

  render() {

    const { days, month, year, isPrevMonth, isNextMonth, selectedDateForRead, selectedDateISO } = this.state;
    return(
      <div className='calendar'>
        <div className='header' onClick={this.openCloseCalendar}>
          <div className='containerDate'>
            <time className='selectedDate' dateTime={selectedDateISO}>
              {selectedDateForRead || ''}
            </time>
          </div>
          <Button
            onClick={this.openCloseCalendar}
            className='btn'>
              <IconClose className='icon-close' />
          </Button>
        </div>
        <div>
          <div className='containerArrow'>
            <Button
              className={isPrevMonth ? 'btn': 'btn disable'}
              onClick={this.previousMonth}>
              <IconArrowLeft className='icon-arrow-left' />
            </Button>
            <time className='date' dateTime={`${year}`}>
              {`${year}   ${month}`}
            </time>
            <Button
              className={isNextMonth ? 'btn': 'btn disable'}
              onClick={this.nextMonth}>
              <IconArrowRight className='icon-arrow-right' />
            </Button>
          </div>
          <ul className='listWikday'>
            {DAYS.map(( item, index) => {
              return <li key={index} className='wikday'>{item}</li>
            })}
          </ul>
          <ul className='listDays' onClick={this.setDate}>
            {createDays(days)}
          </ul>
        </div>
      </div>
    )
  }
};

const createDays = ( listDays ) => (
  listDays.map(({ day, isCurrentMonth, isSelectedDay, isBetweenFromTo, isToday }, index) => {
    let className = 'day';
    className += (isSelectedDay) ? ' selected' : '';
    className += (isCurrentMonth) ? '' : ' notCerrentMonth';
    className += (isToday) ? ' today' : '';
    className += (isBetweenFromTo) ? '' : ' notAvailable';
    return <li key={index} data-index={index} className={className}>{day}</li>
  })
);

Calendar.defaultProps = {
  date: new Date,
  from: null,
  to: null,
  config: null,
  selectedDate: null,
  closeCalendar: null,
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  selectDate: PropTypes.func.isRequired,
  closeCalendar: PropTypes.func.isRequired,
};

export default Calendar;