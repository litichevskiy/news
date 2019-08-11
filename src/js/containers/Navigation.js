import { connect } from 'react-redux';
import { setVisibilitySettings } from '../actions';
import navigation from '../components/Navigation';

// const mapStateToProps = ({ visibilitySettings }) => ( visibilitySettings );

const mapDispatchToProps = ( dispatch ) => {
  return {
    setVisibilitySettings: ( visibility ) => {
      dispatch( setVisibilitySettings( visibility ) );
    }
  }
};

const Navigation = connect(
  null,
  mapDispatchToProps
)( navigation );

export default Navigation;