import * as https from 'https';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as greenLock from 'greenlock-express';

greenLock()
  .init(function getConfig() {
    return { package: path.resolve('./package.json') };
  })
  .serve(httpsWorker);

function httpsWorker(server) {
  // Works with any Node app (Express, etc)
  const app = require('./my-express-app.js');

  // See, all normal stuff here
  app.get('/', (req, res) => {
    res.end('Hello, Encrypted World!');
  });

  // Serves on 80 and 443
  // Get's SSL certificates magically!
  server.serveApp(app);
}

/*
const app = express();

app.get('/', (req, res) => {
  res.send('Hello HTTPS!');
});

https
  .createServer(
    {
      key: fs.readFileSync(path.resolve('localhost.key')),
      cert: fs.readFileSync(path.resolve('localhost.crt')),
    },
    app,
  )
  .listen(3000, () => {
    console.log('Listening...');
  });*/
