import { connect } from 'react-redux';
import { getMoreNews } from '../actions/newsFetch';
import { MAX_QUANTITY_NEWS } from '../config';
import containerNews from '../components/ContainerNews';

const mapStateToProps = ({
  userSettings: { isUploadImages, lastQueryForNews },
  listNews,
  isLoadingNews,
  newsSettings:{ totalNews }
}) => ({
    isLoadMoreNews:( listNews.length < MAX_QUANTITY_NEWS && listNews.length < totalNews ),
    isUploadImages,
    listNews,
    isLoadingNews,
    totalNews,
    lastQueryForNews
});

const mapDispatchToProps = ( dispatch ) => ({
  getMoreNews: url => dispatch( getMoreNews( url ) )
});

const ContainerNews = connect(
  mapStateToProps,
  mapDispatchToProps
)( containerNews );

export default ContainerNews;