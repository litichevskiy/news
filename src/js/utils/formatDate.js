const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/*
  +1 for month because,
  the Date constructor uses 0 for January, not 1
*/

const formatDate = ( date ) => {
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth();
  const day = date.getDate();
  const fullDateISO = `${year}-${addZero( month + 1 )}-${addZero( day )}`;
  hours = addZero(hours);
  minutes = addZero(minutes);
  month = MONTH[month];

  return{ year, month, day, hours, minutes, fullDateISO };
};

const addZero = ( num ) => ( num < 10 ) ? `0${num}`: num;

export default formatDate;