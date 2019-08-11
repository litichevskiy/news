import { connect } from 'react-redux';
import { setVisibilitySettings } from '../actions';
import settings from '../components/Settings';

const mapStateToProps = ({ visibilitySettings }) => ({visibilitySettings});

const mapDispatchToProps = ( dispatch ) => {
  return {
    setVisibilitySettings: ( visibility ) => {
      dispatch( setVisibilitySettings( visibility ) );
    }
  }
};

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)( settings);

export default Settings;