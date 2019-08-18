import React from 'react';
import PropTypes from 'prop-types';

class UserSettings extends React.Component{
  state = {
    quantityNews: 25,
  }

  setQuantityForNews = ( event ) => {

  }

  render() {
    return(
      <section className='userSettings wrapperTabContent'>
        <div className='rowForSettings'>
          <p className='description'>Upload images for news ( chek )</p>
        </div>
        <div className='rowForSettings'>
          <p className='description'>quantity news</p>
          <label className='label containerInputBtn' >
            <input
              className='inputRadio'
              type='radio'
              name='quantity-news'
              onChange={this.setQuantityForNews}/>
            <span className='inputCheckbox radio'></span>
            <span>25</span>
          </label>
        </div>
      </section>
    )
  }
};

UserSettings.defaultProps = {

};

UserSettings.propTypes = {

};

export default UserSettings;