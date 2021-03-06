import React from 'react';
import PropTypes from 'prop-types';

export const IconArrowRight = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="9 0 32 32"
    fill="#121313">
    <path d="M31.708,15.286l-9.002-8.999c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L29.563,16   l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999   C32.097,16.325,32.097,15.675,31.708,15.286z"/>
  </svg>
);

IconArrowRight.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconArrowLeft = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-9 0 32 32"
    fill="#121313" >
    <path d="M10.725,6.287c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999c-0.39,0.389-0.39,1.039,0,1.429l9.002,8.999   c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L2.437,16l8.287-8.285C11.12,7.321,11.12,6.681,10.725,6.287z"/>
  </svg>
);

IconArrowLeft.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconSearch = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64" >
      <circle cx="32" cy="32" fill="#267CB5" r="32"/>
      <path fill="#231F20" d="M48,52.5c-0.64,0-1.28-0.244-1.768-0.732l-12-12c-0.977-0.977-0.977-2.559,0-3.535     c0.976-0.977,2.56-0.977,3.535,0l12,12c0.977,0.977,0.977,2.559,0,3.535C49.28,52.256,48.64,52.5,48,52.5z"/>
      <path fill="#4F5D73" d="M48,50.5c-0.64,0-1.28-0.244-1.768-0.732l-12-12c-0.977-0.977-0.977-2.559,0-3.535    c0.976-0.977,2.56-0.977,3.535,0l12,12c0.977,0.977,0.977,2.559,0,3.535C49.28,50.256,48.64,50.5,48,50.5z"/>
      <ellipse cx="28.386" cy="28.386" fill="#77B3D4" rx="10.567" ry="10.567" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.7579 28.386)"/>
      <path fill="#231F20" d="M28.386,19.819c2.704,0,5.409,1.032,7.472,3.095c4.127,4.127,4.127,10.817,0,14.944     c-2.063,2.063-4.768,3.095-7.472,3.095s-5.409-1.032-7.472-3.095c-4.127-4.127-4.127-10.817,0-14.944     C22.977,20.851,25.682,19.819,28.386,19.819z M28.386,15.819c-3.891,0-7.549,1.515-10.3,4.267c-5.68,5.68-5.68,14.921,0,20.601     c2.751,2.751,6.409,4.267,10.3,4.267s7.549-1.515,10.3-4.267c5.68-5.68,5.68-14.921,0-20.601     C35.935,17.334,32.277,15.819,28.386,15.819L28.386,15.819z"/>
      <path fill="#FFFFFF" d="M28.386,17.819c2.704,0,5.409,1.032,7.472,3.095c4.127,4.127,4.127,10.817,0,14.944    c-2.063,2.063-4.768,3.095-7.472,3.095s-5.409-1.032-7.472-3.095c-4.127-4.127-4.127-10.817,0-14.944    C22.977,18.851,25.682,17.819,28.386,17.819 M28.386,13.819c-3.891,0-7.549,1.515-10.3,4.267c-5.68,5.68-5.68,14.921,0,20.601    c2.751,2.751,6.409,4.267,10.3,4.267s7.549-1.515,10.3-4.267c5.68-5.68,5.68-14.921,0-20.601    C35.935,15.334,32.277,13.819,28.386,13.819L28.386,13.819z"/>
  </svg>
);

IconSearch.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconSettings = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128">
    <circle fill="#267CB5" cx="64" cy="64" r="64"/>
    <path fill="#FFFFFF" d="M103,57h-9.1c-0.5,0-0.8-0.3-1-0.7c-0.7-2.6-1.7-5-3-7.3c-0.2-0.4-0.2-0.9,0.1-1.2l6.4-6.4c0.4-0.4,0.4-1,0-1.4  L88,31.5c-0.4-0.4-1-0.4-1.4,0l-6.4,6.4c-0.3,0.3-0.8,0.4-1.2,0.2c-2.3-1.3-4.7-2.3-7.3-3c-0.4-0.1-0.7-0.5-0.7-1V25  c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v9.1c0,0.5-0.3,0.8-0.7,1c-2.6,0.7-5,1.7-7.3,3c-0.4,0.2-0.9,0.2-1.2-0.1  c-1.4-1.4-4.9-4.9-6.4-6.4c-0.4-0.4-1-0.4-1.4,0L31.5,40c-0.4,0.4-0.4,1,0,1.4l6.4,6.4c0.3,0.3,0.4,0.8,0.2,1.2  c-1.3,2.3-2.3,4.7-3,7.3c-0.1,0.4-0.5,0.7-1,0.7H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h9.1c0.5,0,0.8,0.3,1,0.7  c0.7,2.6,1.7,5,3,7.3c0.2,0.4,0.2,0.9-0.1,1.2c-1.4,1.4-4.9,4.9-6.4,6.4c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1,0.4,1.4,0l6.4-6.4  c0.3-0.3,0.8-0.4,1.2-0.2c2.3,1.3,4.7,2.3,7.3,3C56.8,93,57,93.5,57,94v9c0,0.6,0.5,1,1.1,1h12c0.6,0,0.9-0.4,0.9-1v-9  c0-0.5,0.4-0.9,0.8-1.1c2.6-0.7,5-1.7,7.3-3c0.4-0.2,0.9-0.2,1.2,0.1c1.4,1.4,4.9,4.9,6.4,6.4c0.4,0.4,1,0.4,1.4,0l8.5-8.5  c0.4-0.4,0.4-1,0-1.4l-6.4-6.4c-0.3-0.3-0.4-0.8-0.2-1.2c1.3-2.3,2.3-4.6,3-7.2c0.1-0.4,0.5-0.7,1-0.7h9.1c0.5,0.1,0.9-0.4,0.9-1V58  C104,57.4,103.6,57,103,57z M64,82c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S73.9,82,64,82z"/>
  </svg>
);

IconSettings.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconClose = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32">
    <path fill="#267CB5" d="M26.6,5.4C23.8,2.6,20,1,16,1S8.2,2.6,5.4,5.4C2.6,8.2,1,12,1,16s1.6,7.8,4.4,10.6C8.2,29.4,12,31,16,31   s7.8-1.6,10.6-4.4C29.4,23.8,31,20,31,16S29.4,8.2,26.6,5.4z"/>
    <path fill="#ffffff" d="M17.4,16l5-5c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4,0l-5,4.9l-5-4.9   c-0.4-0.4-1-0.4-1.4,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l5,5l-5,5c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7   c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l5-5l5,5c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7   c0-0.3-0.1-0.5-0.3-0.7L17.4,16z" />
  </svg>
);

IconClose.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconCalendar = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512">
      <rect fill="#267CB5" height="512" rx="256" ry="256" width="512"/>
      <path fill="#efecca" d="M98.34,159H413.66a0,0,0,0,1,0,0V350.87a50,50,0,0,1-50,50H148.34a50,50,0,0,1-50-50V159A0,0,0,0,1,98.34,159Z"/>
      <path fill="#ffb03b" d="M118.34,116.14H393.66a20,20,0,0,1,20,20V169a0,0,0,0,1,0,0H98.34a0,0,0,0,1,0,0V136.14A20,20,0,0,1,118.34,116.14Z"/>
      <circle fill="#61491c" cx="133.07" cy="136.91" r="15.87"/>
      <circle fill="#61491c" cx="182.83" cy="136.91" r="15.87"/>
      <circle fill="#61491c" cx="232.71" cy="136.91" r="15.87"/>
      <circle fill="#61491c" cx="282.47" cy="136.91" r="15.87"/>
      <circle fill="#61491c" cx="332.14" cy="136.91" r="15.87"/>
      <circle fill="#61491c" cx="381.9" cy="136.91" r="15.87"/>
      <rect fill="#b27417" height="12.01" width="315.32" x="98.34" y="156.99"/>
      <rect fill="#a7a37e" height="50.6" rx="10.15" ry="10.15" width="22.61" x="121.81" y="97.83"/>
      <rect fill="#a7a37e" height="50.6" rx="11.3" ry="11.3" width="22.61" x="171.58" y="97.83"/>
      <rect fill="#a7a37e" height="50.6" rx="11.3" ry="11.3" width="22.61" x="221.33" y="97.83"/>
      <rect fill="#a7a37e" height="50.6" rx="11.3" ry="11.3" width="22.61" x="271.16" y="97.83"/>
      <rect fill="#a7a37e" height="50.6" rx="11.3" ry="11.3" width="22.61" x="320.82" y="97.83"/>
      <rect fill="#a7a37e" height="50.6" rx="10.15" ry="10.15" width="22.61" x="370.59" y="97.83"/>
      <path fill="#b64926" d="M176.11,303.46l15.78-2.1q2.72,13.41,9.25,19.33A22.84,22.84,0,0,0,217,326.6a25.49,25.49,0,0,0,18.8-7.71,26,26,0,0,0,7.67-19.11q0-10.87-7.1-17.93t-18.06-7.06a45.34,45.34,0,0,0-11.13,1.75L209,262.7a24.05,24.05,0,0,0,2.54.18,32.5,32.5,0,0,0,18.15-5.26q8.06-5.26,8.06-16.22A19.19,19.19,0,0,0,231.86,227q-5.87-5.7-15.16-5.7a21.49,21.49,0,0,0-15.34,5.79q-6.14,5.79-7.89,17.36l-15.78-2.81q2.89-15.86,13.15-24.59t25.51-8.72a42,42,0,0,1,19.37,4.52,32.66,32.66,0,0,1,13.54,12.32A31.65,31.65,0,0,1,254,241.74a27.13,27.13,0,0,1-4.47,15.17,30.52,30.52,0,0,1-13.24,10.87q11.39,2.63,17.71,10.91t6.31,20.73A37.93,37.93,0,0,1,248,328q-12.27,11.7-31,11.7-16.92,0-28.09-10.08T176.11,303.46Z"/>
      <path fill="#b64926" d="M335.3,337.38H319.52V236.83a81.49,81.49,0,0,1-14.95,10.87A105.83,105.83,0,0,1,288,255.86V240.6a95.22,95.22,0,0,0,23.14-15.08q9.91-8.85,14-17.18H335.3Z"/>
  </svg>
);

IconCalendar.propTypes = {
  className: PropTypes.string.isRequired,
}

export const IconNewsPaper = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 504.123 504.123" >
    <circle style={{"fill":"#267CB5"}} cx="252.062" cy="252.062" r="252.062"/>
    <path style={{"fill":"#F9F9F9"}} d="M389.12,406.843H127.606c-13.785,0-24.812-11.028-24.812-24.812V91.766h261.514v290.265  L389.12,406.843z"/>
    <path style={{"fill":"#CED5E0"}} d="M389.12,406.843L389.12,406.843c-13.785,0-24.812-11.028-24.812-24.812V203.618h49.625v178.412  C413.932,395.815,402.511,406.843,389.12,406.843z"/>
    <rect x="124.062" y="111.852" style={{"fill":"#84DBFF"}} width="215.04" height="78.375"/>
    <rect x="245.76" y="299.717" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="278.843" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="257.969" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="237.095" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="216.222" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="320.591" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="341.465" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="245.76" y="362.338" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="127.212" y="341.465" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="127.212" y="362.338" style={{"fill":"#ACB3BA"}} width="102.4" height="6.302"/>
    <rect x="209.132" y="216.222" style={{"fill":"#4CDBC4"}} width="20.48" height="111.065"/>
    <rect x="181.957" y="262.695" style={{"fill":"#FFD05B"}} width="20.48" height="64.591"/>
    <rect x="154.782" y="247.335" style={{"fill":"#FF7058"}} width="20.48" height="79.951"/>
    <rect x="127.212" y="285.932" style={{"fill":"#324A5E"}} width="20.48" height="41.354"/>
    <path style={{"fill":"#324A5E"}} d="M170.929,129.969h7.089v42.929h-7.877l-24.418-31.508v31.508h-7.089v-42.929h7.089l24.812,32.295   v-32.295H170.929z"/>
    <path style={{"fill":"#324A5E"}} d="M220.554,129.969v6.695h-22.843v11.422h20.48v6.302h-20.48v11.422h23.631v6.695h-31.114v-42.535   H220.554z"/>
    <path style={{"fill":"#324A5E"}} d="M243.791,160.689l9.452-31.114h6.695l9.452,31.114l10.634-31.114h7.877l-14.966,42.929h-7.089   l-9.058-29.538h-0.394l-9.058,29.538h-7.089l-14.966-42.535h7.877L243.791,160.689z"/>
    <path style={{"fill":"#324A5E"}} d="M307.988,135.483c-1.969,0-3.938,0.394-5.12,1.182c-1.182,0.788-1.969,1.969-1.969,3.938   c0,1.575,0.788,3.151,1.969,3.938c1.182,0.788,4.332,1.969,8.665,3.151c4.332,1.182,7.877,2.757,9.846,4.332   c2.363,1.969,3.545,4.726,3.545,8.665s-1.575,6.695-4.332,9.058c-2.757,2.363-6.695,3.545-11.028,3.545   c-6.695,0-12.603-2.363-17.723-7.089l4.726-5.514c4.332,3.938,8.665,5.514,13.391,5.514c2.363,0,4.332-0.394,5.514-1.575   c1.182-1.182,1.969-2.363,1.969-3.938s-0.788-2.757-1.969-3.938c-1.182-0.788-3.545-1.575-6.695-2.363   c-3.151-0.788-5.514-1.575-7.089-1.969c-1.575-0.788-3.151-1.575-4.332-2.363c-2.363-1.969-3.938-4.726-3.938-8.665   s1.575-7.089,4.332-9.058c2.757-1.969,6.302-3.151,10.634-3.151c2.757,0,5.514,0.394,8.271,1.182   c2.757,0.788,5.12,2.363,7.089,3.938l-3.938,5.514c-1.182-1.182-3.151-1.969-5.12-2.757   C312.32,135.877,309.957,135.483,307.988,135.483z"/>
  </svg>
);

IconNewsPaper.propTypes = {
  className: PropTypes.string.isRequired,
};

export const IconLocation = ({ className }) => (
  <svg
    className={`icon ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64">
      <circle cx="32" cy="32" fill="#267CB5" r="32"/>
      <g opacity="0.2">
      <path d="M32,14c-9.389,0-17,7.522-17,16.8C15,45.5,32,56,32,56s17-10.237,17-25.2C49,21.522,41.389,14,32,14z      M32,38c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,38,32,38z" fill="#231F20"/>
      </g>
      <path d="M32,12c-9.389,0-17,7.522-17,16.8C15,43.5,32,54,32,54s17-10.237,17-25.2C49,19.522,41.389,12,32,12z     M32,36c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,36,32,36z" fill="#FFFFFF"/>
  </svg>
);

IconLocation.propTypes = {
  className: PropTypes.string.isRequired,
};


export const IconLogo = ({ className }) => (
  <svg
  className={`icon ${className}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 400">
  <defs>
    <path d="M143,272 L143,128 L59,128 L59,272 C59,298.509668 77.8040405,320 101,320 C124.195959,320 143,298.509668 143,272 Z" id="path-1"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-2" width="200%" x="-50%" y="-50%">
      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
      <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="240" id="path-3" width="240" x="101" y="80"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-4" width="200%" x="-50%" y="-50%">
      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/><feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="108" id="path-5" width="96" x="233" y="164"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-6" width="200%" x="-50%" y="-50%">
      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
      <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="24" id="path-7" width="192" x="125" y="104"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-8" width="200%" x="-50%" y="-50%">
      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
      <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="12" id="path-9" width="96" x="125" y="188"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-10" width="200%" x="-50%" y="-50%">
      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
      <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="12" id="path-11" width="96" x="125" y="164"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-12" width="200%" x="-50%" y="-50%"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
      <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
    <rect height="12" id="path-13" width="96" x="125" y="212"/>
    <filter filterUnits="objectBoundingBox" height="200%" id="filter-14" width="200%" x="-50%" y="-50%"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
    <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
  </filter>
  <rect height="12" id="path-15" width="96" x="125" y="236"/>
  <filter filterUnits="objectBoundingBox" height="200%" id="filter-16" width="200%" x="-50%" y="-50%">
    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
    <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
  </filter>
  <rect height="12" id="path-17" width="96" x="125" y="260"/>
  <filter filterUnits="objectBoundingBox" height="200%" id="filter-18" width="200%" x="-50%" y="-50%">
    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/>
    <feColorMatrix in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
  </filter>
  </defs>
  <ellipse cx="200" cy="200" fill="#82A3A1" id="background" rx="200" ry="200"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"/>
  <use fill="#F2ECD2" fillRule="evenodd" xlinkHref="#path-1"/>
  <use fill="#F2ECD2" fillRule="evenodd" xlinkHref="#path-3"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-5"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-5"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-8)" xlinkHref="#path-7"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-7"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-10)" xlinkHref="#path-9"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-9"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-12)" xlinkHref="#path-11"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-11"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-14)" xlinkHref="#path-13"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-13"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-16)" xlinkHref="#path-15"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-15"/>
  <use fill="black" fillOpacity="1" filter="url(#filter-18)" xlinkHref="#path-17"/>
  <use fill="#545E75" fillRule="evenodd" xlinkHref="#path-17"/>
</svg>
);

IconLogo.propTypes = {
  className: PropTypes.string.isRequired,
};