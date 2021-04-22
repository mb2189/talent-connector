import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Person from '../../components/Person/Person';
import './Persons.css';

const Persons = () => {
  const [people, setPeople] = useState([]);

  // This was without using async/await, leaving here for learning purposes
  // useEffect(() => {
  //   const URL = 'http://localhost:5000/api/v1/talent';

  //   axios
  //     .get(URL)
  //     .then((res) => res.data.data.people)
  //     .then((data) => {
  //       setPeople(data);
  //     });
  // }, [setPeople]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = 'http://localhost:5000/api/v1/talent';

      const res = await axios.get(URL);
      const data = res.data.data.people;

      setPeople(data);
    };

    fetchData();
  }, []);

  const persons = people.map((person) => {
    return (
      <Person
        key={person._id}
        name={person.name}
        email={person.email}
        work={person.work}
        country={person.country}
        department={person.department}
        title={person.title}
        linkedin={person.linkedin}
      />
    );
  });

  return (
    <div className="Persons-wrapper">
      <div className="Persons-header">
        <h1>
          Browse through some of the talented individuals who have worked here
          and are available and open to new opportunities.
        </h1>
      </div>
      <section className="Persons">{persons}</section>
    </div>
  );
};

export default Persons;
