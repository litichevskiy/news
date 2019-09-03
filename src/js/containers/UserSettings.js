import { connect } from 'react-redux';
import { setQuantityNews, setIsLoadImages, setTheme } from '../actions/userSettings';
import userSettings from '../components/UserSettings';

const mapStateToProps = ({ userSettings: { theme, isUploadImages, quantityNews } }) => (
  { theme, isUploadImages, quantityNews }
);

const mapDispatchToProps = ( dispatch ) => ({
    setQuantityNews: quantity => dispatch( setQuantityNews( quantity ) ),
    setIsLoadImages: isLoad => dispatch( setIsLoadImages( isLoad ) ),
    setTheme: theme => dispatch( setTheme( theme ) )
});

const UserSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)( userSettings );

export default UserSettings;