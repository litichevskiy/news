import {fetch as fetchPolyfill} from 'whatwg-fetch';

const serverAPI = {
  async getNews( url ) {

    if( !url ) throw new Error(`url can't be undefined`);

    let response = await fetch( `/get-news?url=${url}` );
    if( response.status !== 200 ) {
      response = await response.json();
      throw new Error( response.message );
    }
    return await response.json();
  }
};

export default serverAPI;