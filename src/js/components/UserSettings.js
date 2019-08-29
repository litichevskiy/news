import React from 'react';
import PropTypes from 'prop-types';
import InputRadio from './InputRadio';
import { QUANTITY_NEWS } from '../config';

const UPLOAD_IMAGES = [{key: 'yes', value: true}, {key: 'no', value: false}];

class UserSettings extends React.Component{
  state = {
    quantityNews: this.props.userSettings.quantityNews,
    uploadImages: this.props.userSettings.isUploadImages,
  }

  setQuantityForNews = ( {target: { value }} ) => {
    this.props.setQuantityNews( value );
    this.setState({ quantityNews: value });
  }

  setUploadImages = () => {
    const uploadImages = !this.state.uploadImages;
    this.props.setIsLoadImages( uploadImages );
    this.setState({ uploadImages: uploadImages });
  }

  render() {
    const { quantityNews, uploadImages } = this.state;
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
                  checked={uploadImages === value} />
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
                  checked={quantityNews === item} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
};

UserSettings.defaultProps = {};
UserSettings.propTypes = {};

export default UserSettings;