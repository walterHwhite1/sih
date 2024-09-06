const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017';
const dbName = 'labtests';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Define your routes here
  app.get('/data', (req, res) => {
    db.collection('yourCollection').find({}).toArray((err, docs) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(docs);
    });
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
