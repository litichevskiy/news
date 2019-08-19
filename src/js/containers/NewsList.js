import { connect } from 'react-redux';
import { setQuantityNews, setIsLoadImages } from '../actions';
import newsList from '../components/NewsList';

const mapStateToProps = ({ userSettings: { isUploadImages }}) => ({ isUploadImages });

const NewsList = connect(
  mapStateToProps,
  null
)( newsList );

export default NewsList;