import React from 'react';
import PropTypes from 'prop-types';
import getParentNode from './../utils/getParentNode';
import InputRadio from './InputRadio';
import Button from './Button';

class NewsByCountries extends React.Component{

  state = {
    // tabName: this.props.tabName,
    category: this.props.categories[0],
    selectedIndex: null,
    country: ''
  };

  setSelectedCountry = ( event ) => {
    event.preventDefault();
    const { countries } = this.props;
    const { selectedIndex } = this.state;
    const item = getParentNode( event.target, 'li' );
    const index = +item.getAttribute('data-index');
    if( selectedIndex === index ) return;
    this.setState({ selectedIndex: index, country: countries[index].code });
    console.log( countries[index].code );
  }

  setCategory = ({target: { value }}) => {
    this.setState({category: value });
  }

  getNews = () => {
    const { country, category } = this.state;
    console.log( 'request :', `?country=${country}&category=${category}`);
    this.clear();
  }

  clear() {
    this.setState({
      selectedIndex: null,
      country: '',
      category: this.props.categories[0]
    });
  }

  render() {
    const { category, selectedIndex, country } = this.state;
    const { categories, countries } = this.props;

    return (
      <div className='newsByCountries wrapperTabContent'>
        <div className='selectCategories'>
          {categories.map(( item, index ) => {
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
        </div>
        {
          country &&
          <Button
            className='btn getNews'
            title='Get news'
            onClick={this.getNews}>
            Get news
          </Button>
        }
        <ul className='countriesList'>{
          countries.map(( { code, country }, index ) => {
            return (
              <li
                key={index}
                data-index={index}
                onClick={this.setSelectedCountry}
                className='country'>
                  <a
                    href=''
                    className={(index === selectedIndex) ? 'linkItemList active': 'linkItemList'}>
                    <span className={`flag bg-${code}`}></span>
                    {country}
                  </a>
                </li>
            )
          })
        }</ul>
      </div>
    )
  }
};

NewsByCountries.defaultProps = {};

NewsByCountries.propTypes = {
  categories: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};

export default NewsByCountries;