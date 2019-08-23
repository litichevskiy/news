import localforage from 'localforage';

const STORAGE_NAME = 'store';

const storage = {

  async init( data ) {
    let store = await this.getStorage( STORAGE_NAME );
    if( !store ) store = await this.setStorage( data );
    return store;
  },

  async getStorage() {
    return await localforage.getItem( STORAGE_NAME );
  },

  async setStorage( store ) {
    return await localforage.setItem( STORAGE_NAME, store );
  },

  async updateStorage( store ) {
    return await this.setStorage( store );
  },
};

export default storage;