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
    this.imageRef.current.addEventListener('load', this.imageLoaded );
    this.imageRef.current.addEventListener('error', this.imageNotAvailable);
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener('load', this.imageLoaded );
    this.imageRef.current.removeEventListener('error', this.imageNotAvailable);
  }

  imageNotAvailable = () => {
    // this.imageRef.current.src = 'images/image-not-available.jpg';
    this.imageRef.current.hidden = true;
    this.setState({ isError: true, isLoad: true });
  }

  imageLoaded = () => {
    this.setState({ isLoad: true });
    // setTimeout(() => {},2000);
  }

  render() {
    const { className, src, alt, title } = this.props;
    const { isLoad, isError } = this.state;

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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;