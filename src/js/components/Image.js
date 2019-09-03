import React from 'react';
import PropTypes from 'prop-types';
import Preloader from './Preloader';

class Image extends React.Component{

  state = {
    isLoad: false,
    isError: false,
  };

  imageRef = React.createRef();

  componentDidMount() {
    if( !this.imageRef.current ) return;
    this.imageRef.current.addEventListener('load', this.imageLoaded );
    this.imageRef.current.addEventListener('error', this.imageNotAvailable);
  }

  componentWillUnmount() {
    if( !this.imageRef.current ) return;
    this.imageRef.current.removeEventListener('load', this.imageLoaded );
    this.imageRef.current.removeEventListener('error', this.imageNotAvailable);
  }

  imageNotAvailable = () => {
    this.imageRef.current.hidden = true;
    this.setState({ isError: true, isLoad: true });
  }

  imageLoaded = () => {
    this.setState({ isLoad: true });
  }

  render() {
    const { className, src, alt, title } = this.props;
    const { isLoad, isError } = this.state;

    if( !src ) return <div className='imgNotAvailable'>image isn't available</div>

    return(
      <>
        <img
          data-src={src}
          ref={this.imageRef}
          className={`${className} lazy`}
          alt={alt}
          title={title} />
         { isError && <div className='imgNotAvailable'>image isn't available</div> }
         { !isLoad && <Preloader /> }
      </>
    )
  }
};

Image.defaultProps = {
  className: 'image',
  src: '',
  alt: '',
  title: '',
};

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;