const Person = require('../models/talentModel');

exports.getAllTalent = async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json({
      status: 'success',
      results: people.length,
      data: {
        people: people,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createTalent = async (req, res) => {
  try {
    const { body } = req;
    const newPerson = await Person.create(body);

    res.status(201).json({
      status: 'success',
      data: {
        person: newPerson,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
