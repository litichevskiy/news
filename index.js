const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();

const compression = require('compression');
const getNews = require('./getNews');

app.use(compression({filter: shouldCompress}));

app.use('/manifest.json', express.static(__dirname + '/manifest.json'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/images', express.static(__dirname + '/src/images'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/get-news', ( req, res ) => {
  getNews( req.query )
  .then( response => res.send( response ))
  .catch( error => res.status( error.code ).send({ message: error.message }));
});

app.listen( PORT, () => console.log(`server listening on port ${PORT}`));

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) return false;
  else return compression.filter(req, res);
};

module.exports = app;