import React from 'react';
import countries from './../countries';
import getParentNode from './../utils/getParentNode';

class CountriesList extends React.Component{

  clickHandler = ( event ) => {
    const target = getParentNode( event.target, 'li' );
    const countryCode = target.getAttribute('data-code');
    if( !countryCode ) throw new Error(`country code ${countryCode} can't be undefined`);
    console.log( countryCode );
  }

  render() {
    return (
      <ul className='countriesList'>{
        countries.map(( item, index ) => {
          const { code, country } = item;
          return (
            <li
              key={index}
              data-code={code}
              onClick={this.clickHandler}
              className='country'>
                <span className={`flag bg-${code}`}></span>
                {country}
              </li>
          )
        })
      }</ul>
    )
  }
};

export default CountriesList;