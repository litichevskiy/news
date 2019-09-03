import React from 'react';
import PropTypes from 'prop-types';
import InputRadio from './InputRadio';
import { QUANTITY_NEWS, THEMES } from '../config';

const UPLOAD_IMAGES = [{key: 'yes', value: true}, {key: 'no', value: false}];

class UserSettings extends React.Component{
  state = {
    quantityNews: this.props.quantityNews,
    isUploadImages: this.props.isUploadImages,
    theme: this.props.theme,
  }

  setQuantityForNews = ( { target: { value }} ) => {
    this.props.setQuantityNews( value );
    this.setState({ quantityNews: value });
  }

  setUploadImages = () => {
    const isUploadImages = !this.state.isUploadImages;
    this.props.setIsLoadImages( isUploadImages );
    this.setState({ isUploadImages: isUploadImages });
  }

  setTheme = ( { target: { value }} ) => {
    this.setState({ theme: value });
    this.props.setTheme( value );
  }

  render() {
    const { quantityNews, isUploadImages, theme } = this.state;

    return(
      <div className='userSettings wrapperTabContent'>
        <div className='rowForSettings'>
          <p className='description'>Upload images for news</p>
          <div className='wraperLabels'>
            {UPLOAD_IMAGES.map(( { key, value }, index ) => {
              return(
                <InputRadio
                  key={index}
                  labelClass={'containerInputRadio'}
                  name={'upload-images-for-news'}
                  value={key}
                  onChange={this.setUploadImages}
                  checked={isUploadImages === value}
                  content={<span>{key}</span>} />
              )
            })}
          </div>
        </div>
        <div className='rowForSettings'>
          <p className='description'>Quantity news</p>
          <div className='wraperLabels containerQuantity'>
            {QUANTITY_NEWS.map(( item, index ) => {
              return(
                <InputRadio
                  key={index}
                  labelClass={'containerInputRadio'}
                  name={'quantity-news'}
                  value={item}
                  onChange={this.setQuantityForNews}
                  checked={quantityNews === item}
                  content={<span>{item}</span>}/>
              )
            })}
          </div>
        </div>
      {/*theme*/}
        <div className='rowForSettings'>
          <p className='description'>Theme</p>
          <div className='wraperLabels containerQuantity'>
            {THEMES.map(( item, index ) => {
              return(
                <InputRadio
                  key={index}
                  labelClass={'containerInputRadio'}
                  name={'theme'}
                  value={item}
                  onChange={this.setTheme}
                  checked={theme === item}
                  content={<span>{item}</span>}/>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
};

UserSettings.propTypes = {
  quantityNews: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isUploadImages: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export default UserSettings;