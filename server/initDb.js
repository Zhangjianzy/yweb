export default (callback)=> {
  if (mongoURL === null) return;

  let mongodb = require('mongodb');
  if (mongodb === null) return;

  mongodb.connect(mongoURL, (err, conn)=> {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};
