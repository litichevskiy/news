const fetch = require('node-fetch');
const API_KEY = 'b158c3465f5c44118acfd389f25d7549';

module.exports = getNews = async ( url ) => {

  if( !url ) throw { code: 400, message: `url can't be undefined` };

  let response = await fetch( `${url}&apiKey=${API_KEY}` );

  if( response.status !== 200 ) {
    response = await response.json();
    throw { code: 423, message: response.message };
  }

  return await response.json();
};