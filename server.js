const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Watch } = require('./models');

const { watchesRouter } = require('./routes/watches');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/watches', watchesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
