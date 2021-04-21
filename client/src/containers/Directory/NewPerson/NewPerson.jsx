import React from 'react';

import './NewPerson.css';

const NewPerson = () => (
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
          We are launching our Talent Directory in order to connect individuals
          to talent and opportunities. If you are interested in joining our
          private talent directory, please submit your information by entering
          in the form. If you do not want to be listed in the directory, but are
          still interested in viewing open positions with our partner companies,
          please navigate to "partners tab".
        </p>
      </div>
      <div className="NewPerson">
        <h1>Your Information</h1>
        <label htmlFor="fullName">
          Full Name<span style={{ color: '#dc3545' }}>*</span>
          <input type="text" id="fullName" />
        </label>
        <label htmlFor="email">
          Email<span style={{ color: '#dc3545' }}>*</span>
          <input type="text" id="email" />
        </label>
        <label htmlFor="co">
          Country<span style={{ color: '#dc3545' }}>*</span>
          <select id="co">
            <option value="country">United States</option>
            <option value="country">Korea</option>
            <option value="country">Israel</option>
            <option value="country">Germany</option>
          </select>
        </label>
        <label htmlFor="dept">
          Department<span style={{ color: '#dc3545' }}>*</span>
          <select id="dept">
            <option value="department">Talent Acquisition</option>
            <option value="department">Marketing</option>
            <option value="department">Engineering</option>
            <option value="department">Finance</option>
            <option value="department">Product</option>
          </select>
        </label>
        <label htmlFor="position">
          Position / Title<span style={{ color: '#dc3545' }}>*</span>
          <input type="text" id="position" />
        </label>
        <label htmlFor="work">
          Work Status<span style={{ color: '#dc3545' }}>*</span>
          <select id="work">
            <option value="work">Full-time</option>
            <option value="work">Part-time</option>
            <option value="work">Contract</option>
          </select>
        </label>
        <label htmlFor="linked">
          Please insert the link to your LinkedIn Profile
          <input type="text" id="linked" placeholder="https://" />
        </label>
        <button type="submit" value="Submit">
          Submit Information
        </button>
      </div>
    </div>
  </div>
);

export default NewPerson;
