const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dbName = "assign-mentor"
const url =`mongodb+srv://saini-parul:6PPTdz8ITeKRlvzD@mongodbzen.fq1y0t1.mongodb.net/${dbName}`

module.exports={url,mongodb,MongoClient}
