import React from 'react';
import PropTypes from 'prop-types';
import getParentNode from './../utils/getParentNode';
import Button from './Button';
import { NEWS_API, TOP_HEADLINES } from '../config';

class NewsByCountries extends React.Component{

  state = {
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
    if( selectedIndex === index ) {
      this.setState({ selectedIndex: null, country: '' });
    }

    else this.setState({ selectedIndex: index, country: countries[index].code });
  }

  setCategory = ({target: { value }}) => {
    this.setState({category: value });
  }

  getNews = () => {
    const { country, category } = this.state;
    const { getNews, urlPath, quantityNews } = this.props;
    const query = `?country=${country}&category=${category}&pageSize=${quantityNews}`;
    getNews(`${urlPath}${query}`);
    this.clear();
  }

  clear() {
    this.setState({
      selectedIndex: null,
      country: '',
    });
  }

  render() {
    const { category, selectedIndex, country } = this.state;
    const { categories, countries } = this.props;

    return (
      <div className='newsByCountries wrapperTabContent'>
        <div className='selectWrapper'>
          <select
            value={category}
            onChange={this.setCategory}
            className='selectCategofies'>
            {categories.map(( item, index ) => {
              return (
                <option
                  className='optionCategofies'
                  key={index}
                  value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <Button
          disabled={country ? false : true}
          className='btn getNews'
          title='Get news'
          onClick={this.getNews}>
          Get news
        </Button>
        <div className='listWrapper'>
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
                      className={(index === selectedIndex) ? 'linkItemList selected': 'linkItemList'}>
                      <span className={`flag bg-${code}`}></span>
                      {country}
                    </a>
                  </li>
              )
            })
          }</ul>
        </div>
      </div>
    )
  }
};

NewsByCountries.defaultProps = {
  urlPath: `${NEWS_API}${TOP_HEADLINES}`,
};

NewsByCountries.propTypes = {
  categories: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  urlPath: PropTypes.string,
};

export default NewsByCountries;