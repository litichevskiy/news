import { connect } from 'react-redux';
import { getNews } from '../actions';
import newsByCountries from '../components/NewsByCountries';

const mapStateToProps = ( { userSettings: { quantityNews }} ) => (
  { quantityNews }
);

const mapDispatchToProps = ( dispatch ) => ({
    getNews: url => dispatch( getNews( url ) )
});

const NewsByCountries = connect(
  mapStateToProps,
  mapDispatchToProps
)( newsByCountries );

export default NewsByCountries;