import { DAYS, SHORT_MONTHS } from '../config';
/*
  +1 for month because,
  the Date constructor uses 0 for January, not 1
*/

const formatDate = ( date ) => {
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth();
  const monthIndex = month;
  const day = date.getDate();
  const fullDateISO = `${year}-${addZero( month + 1 )}-${addZero( day )}`;
  hours = addZero(hours);
  minutes = addZero(minutes);
  month = SHORT_MONTHS[month];

  return{ year, month, monthIndex, day, hours, minutes, fullDateISO };
};

const addZero = ( num ) => ( num < 10 ) ? `0${num}`: num;

export default formatDate;