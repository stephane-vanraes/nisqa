import { OWNER_EMAIL, OWNER_NAME } from '$env/static/private';
import PouchDB from 'pouchdb';

export const db = new PouchDB('nisqa.db');

export function setup() {
  db.get('owner').catch((_) =>
    db
      .put({
        _id: 'owner',
        name: OWNER_NAME,
        email: OWNER_EMAIL
      })
      .then(() => console.log('owner setup'))
  );
}
