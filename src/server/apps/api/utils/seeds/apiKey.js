const crypto = require('crypto');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;

const connect = async () => {
  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DataBase connected succesfully');
};

connect();

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:projects',
  'create:projects',
  'update:projects',
  'delete:projects',
];

const publicScopes = ['read:projects'];

const generateRandomToken = () => {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
};

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes,
  },
];

const apiKeysModel = new mongoose.Schema({
  token: String,
  scopes: [String],
});

const model = mongoose.model('api-keys', apiKeysModel);

apiKeys.forEach(async (key) => {
  try {
    return await new model(key).save();
  } catch (error) {
    console.log(error);
  }
});
