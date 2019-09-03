import { connect } from 'react-redux';
import { getNews } from '../actions/newsFetch';
import newsByPublishers from '../components/NewsByPublishers';

const mapStateToProps = ({ userSettings: { isUploadImages, quantityNews }, listNews}) => (
  { isUploadImages, listNews, quantityNews }
);

const mapDispatchToProps = ( dispatch ) => ({
  getNews: url => dispatch( getNews( url ) )
});

const NewsByPublishers = connect(
  mapStateToProps,
  mapDispatchToProps
)( newsByPublishers );

export default NewsByPublishers;