import { connect } from 'react-redux';
import { setQuantityNews, setIsLoadImages } from '../actions';
import userSettings from '../components/UserSettings';

const mapStateToProps = ({ userSettings }) => ({ userSettings });

const mapDispatchToProps = ( dispatch ) => ({
    setQuantityNews: quantity => dispatch( setQuantityNews( quantity ) ),
    setIsLoadImages: isLoad => dispatch( setIsLoadImages( isLoad ) )
});

const UserSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)( userSettings );

export default UserSettings;