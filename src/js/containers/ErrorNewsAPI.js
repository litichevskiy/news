import { connect } from 'react-redux';
import { newsApiError } from '../actions';
import Alert from '../components/Alert';

const mapStateToProps = ({ newsAPIError: { isShow, message } }) => (
  { isShow, message }
);

const mapDispatchToProps = ( dispatch ) => {
  return {
    closeMessage: ({ message = '', isShow = false }) => {
      dispatch( newsApiError({ message, isShow }) );
    }
  }
};

const ErrorNewsAPI = connect(
  mapStateToProps,
  mapDispatchToProps
)( Alert );

export default ErrorNewsAPI;