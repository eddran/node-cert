import * as path from 'path';
const greenLock = require('@root/greenlock');
const greenLockApp = greenLock.create({
  packageRoot: path.resolve(''),
  configDir: './greenlock.d/config.json',
  packageAgent: 'node-cert-2/1.2',
  maintainerEmail: 's1nc4pp@gmail.com',
  staging: true,
  notify: function(event, details) {
    if ('error' === event) {
      // `details` is an error object in this case
      console.error(details);
    }
  },
});

const subject = 'karga.com';

greenLockApp.manager
  .add({ subject: subject, altnames: [subject] })
  .then(response => {
    console.log('response', response);
  })
  .catch(console.log);
