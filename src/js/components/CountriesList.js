import React from 'react';
import countries from './../countries';
import getParentNode from './../utils/getParentNode';
import { NEWS_CATEGORY as CATEGORY } from './../config';

class CountriesList extends React.Component{

  state = {
    category:'business',
    countryCode: 'ar'
  };

  clickHandler = ( event ) => {
    const target = getParentNode( event.target, 'li' );
    const countryCode = target.getAttribute('data-code');
    if( !countryCode ) throw new Error(`country code ${countryCode} can't be undefined`);
    console.log( countryCode );
  }

  setCategory = ( event ) => {
    console.log( event.target.value );
    this.setState({category: event.target.value });
  }

  sendRequest = () => {
    console.log( this.state.category, this.state.co )
  }

  render() {
    const {category} = this.state;
    return (
      <>
        {/*<div>
          <p>category</p>
          {<Inputs list={CATEGORY} active={category} onChange={this.setCategory} name={'cat'} />}
        </div>
        <div>
          <button>get news</button>
        </div>*/}
        <ul className='countriesList wrapperTabContent'>{
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
      </>
    )
  }
};

const Inputs = ({list, active, onChange, name}) => {
    return list.map(( item, index ) => {
      return(
        <label key={index}>
          <input
            type='radio'
            value={item}
            onChange={onChange}
            checked={item === active}
            name={name}/>
          <span>{item}</span>
        </label>
      )
    })
};

export default CountriesList;