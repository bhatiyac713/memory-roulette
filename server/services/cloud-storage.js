const Storage = require('@google-cloud/storage');
const config = require('config');
// Creates a client
const storage = new Storage();
const bucketName = config.get('bucketName');

module.exports = {
  getRandomFileUrl: getRandomFileUrl
};

function getRandomFileUrl() {
  return new Promise(function(fulfill, reject) {
    storage
      .bucket(bucketName)
      .getFiles()
      .then(results => {
        const files = results[0];

        const options = {
          action: 'read',
          expires: new Date(new Date().getTime() + 10000)
        };

        var randomIndex = Math.floor(Math.random() * files.length);

        storage
          .bucket(bucketName)
          .file(files[randomIndex].name)
          .getSignedUrl(options)
          .then(results => {
            const url = results[0];
            // console.log(`Media link: ${url}`);
            fulfill(url);
          })
          .catch(err => {
            console.error('ERROR:', err);
            reject(err);
          });
      })
      .catch(err => {
        console.error('ERROR:', err);
        reject(err);
      });
  });
}
