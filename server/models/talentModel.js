const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
  },
  work: {
    type: String,
    required: [true, 'Work status is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
  },
  title: {
    type: String,
    required: [true, 'Position/Title is required'],
  },
  linkedin: {
    type: String,
    default: 'https://www.linkedin.com/',
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
