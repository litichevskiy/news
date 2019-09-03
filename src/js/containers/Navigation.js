import { connect } from 'react-redux';
import { setVisibilitySettings } from '../actions/index';
import navigation from '../components/Navigation';

const mapDispatchToProps = ( dispatch ) => ({
  setVisibilitySettings: visibility => dispatch( setVisibilitySettings( visibility ) )
});

const Navigation = connect(
  null,
  mapDispatchToProps
)( navigation );

export default Navigation;