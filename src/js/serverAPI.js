import {fetch as fetchPolyfill} from 'whatwg-fetch';

const API_KEY = 'b158c3465f5c44118acfd389f25d7549';

const serverAPI = {
  async getNews( url ) {
    if( !url ) throw new Error(`url can't be ${url}`);
    let response = await fetch( `${url}&apiKey=${API_KEY}` );
    if( response.status !== 200 ) {
      response = await response.json();
      throw new Error( response.message );
    }
    return await response.json();
  }
};

export default serverAPI;