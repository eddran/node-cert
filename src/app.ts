import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(80, () => {
  console.log('listening on 80');
});
