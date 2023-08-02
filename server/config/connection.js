const mongoose = require('mongoose');
const uri = process.env.MONGODB_PASS || 'mongodb://127.0.0.1:27017/removalsquote' ;

mongoose.connect(uri);

module.exports = mongoose.connection;




