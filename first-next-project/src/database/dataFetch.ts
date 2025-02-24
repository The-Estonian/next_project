import db from './db';
import { promisify } from 'util';

const dbAll = promisify(db.all).bind(db);

const dataFetch = async () => {
  const query = 'SELECT * FROM users';
  return dbAll(query);
};

export default dataFetch;
