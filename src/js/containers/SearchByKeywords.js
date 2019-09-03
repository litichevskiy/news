import { connect } from 'react-redux';
import { getNews } from '../actions/newsFetch';
import searchByKeywords from '../components/SearchByKeywords';

const mapStateToProps = ( { userSettings: { quantityNews }} ) => (
  { quantityNews }
);

const mapDispatchToProps = ( dispatch ) => ({
    getNews: url => dispatch( getNews( url ) )
});

const SearchByKeywords = connect(
  mapStateToProps,
  mapDispatchToProps
)( searchByKeywords );

export default SearchByKeywords;