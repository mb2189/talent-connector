import React, { useState } from 'react';
import axios from 'axios';

import './NewPerson.css';

const personData = {
  name: undefined,
  email: undefined,
  country: 'United States',
  department: 'Talent Acquisition',
  title: undefined,
  work: 'Full-time',
  linkedin: undefined,
};

const NewPerson = () => {
  const [person, setPerson] = useState(personData);

  const handlePersonChange = (e) => {
    setPerson({ ...person, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = 'http://localhost:5000/api/v1/talent';

    axios.post(URL, person);
    e.target.reset();
    setPerson(personData);
  };

  return (
    <div className="home-wrapper">
      {/* <div className="banner-wrapper">
              <div className="banner">
                  <img src={logo} alt="Company Banner" width="750" height="400" className="logo"></img>
              </div>
          </div> */}
      <div className="home-flex-container">
        <div className="info">
          <h1 className="next-head">Talent Connector</h1>
          <br />
          <p>
            Our goal will always be to elevate our people, past and present.
            <br />
            <br />
            We are launching our Talent Directory in order to connect
            individuals to talent and opportunities. If you are interested in
            joining our private talent directory, please submit your information
            by entering in the form. If you do not want to be listed in the
            directory, but are still interested in viewing open positions with
            our partner companies, please navigate to "partners tab".
          </p>
        </div>
        <div className="NewPerson">
          <form onSubmit={handleSubmit} id="personForm">
            <h1>Your Information</h1>
            <label htmlFor="fullName">
              Full Name<span style={{ color: '#dc3545' }}>*</span>
              <input
                type="text"
                id="name"
                onChange={handlePersonChange}
                required
              />
            </label>
            <label htmlFor="email">
              Email<span style={{ color: '#dc3545' }}>*</span>
              <input
                type="text"
                id="email"
                onChange={handlePersonChange}
                required
              />
            </label>
            <label htmlFor="country">
              Country<span style={{ color: '#dc3545' }}>*</span>
              <select id="country" onBlur={handlePersonChange} required>
                <option>United States</option>
                <option>Korea</option>
                <option>Israel</option>
                <option>Germany</option>
              </select>
            </label>
            <label htmlFor="department">
              Department<span style={{ color: '#dc3545' }}>*</span>
              <select id="department" onBlur={handlePersonChange} required>
                <option>Talent Acquisition</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Finance</option>
                <option>Product</option>
              </select>
            </label>
            <label htmlFor="title">
              Position / Title<span style={{ color: '#dc3545' }}>*</span>
              <input
                type="text"
                id="title"
                onChange={handlePersonChange}
                required
              />
            </label>
            <label htmlFor="work">
              Work Status<span style={{ color: '#dc3545' }}>*</span>
              <select id="work" onBlur={handlePersonChange} required>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </label>
            <label htmlFor="linkedin">
              Please insert the link to your LinkedIn Profile
              <input
                type="text"
                id="linkedin"
                onChange={handlePersonChange}
                placeholder="https://"
              />
            </label>
            <button type="submit" value="Submit">
              Submit Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPerson;
