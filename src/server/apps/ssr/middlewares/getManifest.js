const fs = require('fs');

const getObjectManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(__dirname + '/../public/build/manifest.json'));
  } catch (error) {
    console.log(error);
  }
};

const getManifest = function (req, res, next) {
  if(!req.hashManifest) req.hashManifest = getObjectManifest();
  next();
};

export default getManifest;