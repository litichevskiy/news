import { connect } from 'react-redux';
import { newsApiError } from '../actions/newsAPIError';
import app from '../App';

const mapStateToProps = ({ userSettings: { theme } }) => (
  { theme }
);

const App = connect(
  mapStateToProps,
  null
)( app );

export default App;