import { connect } from 'react-redux';
import { setVisibilitySettings } from '../actions/index';
import { setActiveTabIndex } from '../actions/userSettings';
import settings from '../components/Settings';

const mapStateToProps = ({ visibilitySettings, userSettings:{ activeTabIndex }, isLoadingNews }) => (
  { visibilitySettings, activeTabIndex, isLoadingNews }
);

const mapDispatchToProps = ( dispatch ) => ({
  setVisibilitySettings: visibility => dispatch( setVisibilitySettings( visibility ) ),
  setActiveTabIndex: index => dispatch( setActiveTabIndex( index ) )
});

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)( settings );

export default Settings;