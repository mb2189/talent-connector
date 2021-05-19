const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const path = require('path');

const app = express();

const talentRouter = require('./routes/talentRoutes');
const companyRouter = require('./routes/companyRoutes');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '../client/build')));

// ROUTES
app.use('/api/v1/talent', talentRouter);
app.use('/api/v1/companies', companyRouter);

module.exports = app;
