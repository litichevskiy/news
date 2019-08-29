const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const sslRedirect = require('heroku-ssl-redirect');


app.use(sslRedirect(['other','development','production']));
app.use(compression({filter: shouldCompress}));

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/images', express.static(__dirname + '/src/images'));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen( PORT, () => console.log(`server listening on port ${PORT}`));

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) return false;
  else return compression.filter(req, res);
};

////////////////////////////////////////////////////////////////////////////
const articles = require('./src/js/test-news-data');

let listNews = [];
const createListNews = ( quantity ) => {
  for( let i = 0; i < quantity; i++ ) {
    listNews.push({
      "source":{
         "id":"bbc-news",
         "name":"BBC News"
      },
      "author":`counter: ${i}`,
      "title":"Denmark defiant on Greenland after Trump snub",
      "description":"The Danish PM says she is \"annoyed and surprised\" after the US president cancels his state visit.",
      "url":"http://www.bbc.co.uk/news/world-us-canada-49423968",
      "urlToImage":`https://via.placeholder.com/350/${(Math.random() * 100000).toFixed()}`,
      "publishedAt":"2019-08-21T13:47:57Z",
      "content":"Media captionWatch: Greenland wouldn't be the first time the US bought territory\r\nDenmark's prime minister, Mette Frederiksen, says she is \"annoyed and surprised\" after Donald Trump cancelled his visit over the future of Greenland. \r\n\"Our preparations were we… [+909 chars]"
      })
  }
};

let TOTAL_NEWS = 18;
createListNews( TOTAL_NEWS );
let counter = 5;
let from = 0;
let to = counter;
app.get('/test-news-data', ( req, res ) => {
  res.send({ status: 'ok', totalResults: 797, articles: articles });

  // setTimeout(() => {
  //   res.send({ status: 'ok', totalResults: 797, articles: articles });
  // }, 1000);

  // let art;
  // if( to >= TOTAL_NEWS ) {
  //   art = [];
  //   TOTAL_NEWS = 0;
  // }
  // art = listNews.slice( from, to );
  // from = to;
  // to = to + counter;
  // res.send({ status: 'ok', totalResults: TOTAL_NEWS, articles: art });
});
