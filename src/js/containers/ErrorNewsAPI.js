import { connect } from 'react-redux';
import { newsApiError } from '../actions/newsAPIError';
import Alert from '../components/Alert';

const mapStateToProps = ({ newsAPIError: { isShow, message } }) => (
  { isShow, message }
);

const mapDispatchToProps = ( dispatch ) => ({
  closeMessage: ({ message = '', isShow = false }) => dispatch( newsApiError({ message, isShow }) )
});

const ErrorNewsAPI = connect(
  mapStateToProps,
  mapDispatchToProps
)( Alert );

export default ErrorNewsAPI;