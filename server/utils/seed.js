const fs = require('fs');
const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://127.0.0.1:27017/';
const dbName = 'yeets-db';
const jsonFilePath = './data.json';

async function seedMongoDB() {
  try {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);

    const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    for (const key in data) {
      if (Array.isArray(data[key]) && data[key].length > 0) {
        const collection = db.collection(key);
        await collection.insertMany(data[key]);
      }
    }

    console.log('Database seeded successfully.');

    client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedMongoDB();
