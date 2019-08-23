import { connect } from 'react-redux';
import { setVisibilitySettings, setActiveTabIndex } from '../actions';
import settings from '../components/Settings';

const mapStateToProps = ({ visibilitySettings, userSettings:{ activeTabIndex } }) => (
  {visibilitySettings, activeTabIndex}
);

const mapDispatchToProps = ( dispatch ) => {
  return {
    setVisibilitySettings: ( visibility ) => {
      dispatch( setVisibilitySettings( visibility ) );
    },

    setActiveTabIndex: ( index ) => {
      dispatch( setActiveTabIndex( index ) );
    }
  }
};

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)( settings );

export default Settings;