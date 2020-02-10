import * as path from 'path';
const greenLock = require('@root/greenlock');
const greenLockApp = greenLock.create({
  packageRoot: path.resolve(''),
  configDir: './greenlock.d/config.json',
  packageAgent: 'node-cert-2/1.2',
  maintainerEmail: 'jon2@example.com',
  staging: true,
  notify: function(event, details) {
    if ('error' === event) {
      // `details` is an error object in this case
      console.error(details);
    }
  },
});

greenLockApp.manager
  .defaults({
    agreeToTerms: true,
    subscriberEmail: 'webhosting2@example.com',
  })
  .then(function(fullConfig) {
    console.log('Success 1', fullConfig);
  });

const altnames = ['storadewebservices.com', 'www.storadewebservices.com.com'];

greenLockApp
  .add({
    subject: altnames[0],
    altnames: altnames,
  })
  .then(function(response) {
    console.log('Success 2', response);
  });
