const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.url = `mongodb://${this.host}:${this.port}/${this.database}`;
    this.client = new MongoClient(this.url, { useUnifiedTopology: true });
  }

  async isAlive() {
    try {
      await this.client.connect();
      return true;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      return false;
    } finally {
      await this.client.close();
    }
  }

  async nbUsers() {
    try {
      await this.client.connect();
      const usersCollection = this.client.db(this.database).collection('users');
      const count = await usersCollection.countDocuments();
      return count;
    } catch (error) {
      console.error('Error counting users:', error);
      return -1;
    } finally {
      await this.client.close();
    }
  }

  async nbFiles() {
    try {
      await this.client.connect();
      const filesCollection = this.client.db(this.database).collection('files');
      const count = await filesCollection.countDocuments();
      return count;
    } catch (error) {
      console.error('Error counting files:', error);
      return -1;
    } finally {
      await this.client.close();
    }
  }
}

// Create and export an instance of DBClient called dbClient
const dbClient = new DBClient();
module.exports = dbClient;
