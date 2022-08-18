const mongoDB = require('mongoose');
exports.mongodb = async () => {
    mongoDB.connect(process.env.HOST_URI, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => { console.log("connection okay") })
}