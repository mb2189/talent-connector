import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Directory.css';
import Persons from '../Persons/Persons';
import NewPerson from '../../components/NewPerson/NewPerson';
import Companies from '../Companies/Companies';

const Directory = () => (
  <div className="Directory">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/talent">Talent</Link>
          </li>
          <li>
            <Link to="/companies">Partners</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Route path="/" exact component={NewPerson} />
    <Route path="/talent" component={Persons} />
    <Route path="/companies" component={Companies} />
  </div>
);

export default Directory;
