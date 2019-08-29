import { connect } from 'react-redux';
import { getNews } from '../actions';
import newsByPublishers from '../components/NewsByPublishers';

const mapStateToProps = ({ userSettings: { isUploadImages, quantityNews }, listNews}) => (
  { isUploadImages, listNews, quantityNews }
);

// const mapStateToProps = ({ userSettings: { isUploadImages }, listNews}) => {
//   debugger
//   return { isUploadImages, listNews }
// };

const mapDispatchToProps = ( dispatch ) => {
  return {
    getNews: ( url ) => {
      dispatch( getNews( url ) );
    }
  }
};

const NewsByPublishers = connect(
  mapStateToProps,
  mapDispatchToProps
)( newsByPublishers );

export default NewsByPublishers;