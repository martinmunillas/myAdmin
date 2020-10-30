import mongoose from 'mongoose';

require('dotenv').config();

mongoose.Promise = global.Promise;

const connect = async () => {
  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DataBase connected succesfully');
};

module.exports = connect;
