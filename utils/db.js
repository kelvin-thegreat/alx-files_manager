import { MongoClient } from 'mongodb';
  /**
   * Creates a new DBClient instance.
   */
class DBClient {
  constructor() {
    this.db = null;
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '27017';
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/`;
    MongoClient.connect(url, { userUnifiedTopology: true }, (error, client) => {
      if (error) throw error;
      this.db = client.db(database);
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}
const dbClient = new DBClient();
module.exports = dbClient;
