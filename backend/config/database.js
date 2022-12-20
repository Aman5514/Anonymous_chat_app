require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
let { MONGOURL , MONGOLIVE } = process.env;
exports.connection = () => {
  return new Promise(async (resolve, reject) => {
    await MongoClient.connect(
      MONGOURL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) console.log("error", err);
        console.log("Connected correctly to database");
        var db = client.db("AnonymousChat");
        resolve(db);
      }
    );
  });
};
