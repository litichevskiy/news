import React from 'react';
import PropTypes from 'prop-types';
import countries from './../countries';
import getParentNode from './../utils/getParentNode';
import InputRadio from './InputRadio';
import { NEWS_CATEGORY as CATEGORY } from './../config';

class CountriesList extends React.Component{

  state = {
    category:'business',
    countryCode: 'ar'
  };

  clickHandler = ({ target }) => {
    const item = getParentNode( target, 'li' );
    const countryCode = item.getAttribute('data-code');
    if( !countryCode ) throw new Error(`country code ${countryCode} can't be undefined`);
    console.log( countryCode );
  }

  setCategory = ({target: { value }}) => {
    console.log( value );
    this.setState({category: value });
  }

  sendRequest = () => {
    console.log( this.state.category, this.state.co )
  }

  render() {
    const {category} = this.state;
    return (
      <div className='wrapperTabContent'>
        <div>
          <p>category</p>
          {CATEGORY.map(( item, index ) => {
            return(
              <InputRadio
                key={index}
                labelClass={'containerInputRadio'}
                name={'categories-category'}
                value={item}
                onChange={this.setCategory}
                checked={item === category} />
            )
          })}
          <button>get news</button>
        </div>
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
      </div>
    )
  }
};

CountriesList.defaultProps = {};
CountriesList.propTypes = {};

export default CountriesList;