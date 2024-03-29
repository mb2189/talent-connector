const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });
const { DB } = process.env;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }) // eslint-disable-next-line no-console
  .then(() => console.info('DB connection successful!'));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
