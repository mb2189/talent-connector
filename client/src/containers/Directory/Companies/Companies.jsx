import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Company from '../../../components/Company/Company';
import './Companies.css';

const Companies = () => {
  const [complist, setComplist] = useState([]);

  // This was without using async/await, leaving here for learning purposes
  // useEffect(() => {
  //   const URL = 'http://localhost:5000/api/v1/companies';

  //   axios
  //     .get(URL)
  //     .then((res) => res.data.data.companies)
  //     .then((data) => {
  //       setComplist(data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const URL = 'http://localhost:5000/api/v1/companies';

      const res = await axios.get(URL);
      const data = res.data.data.companies;

      setComplist(data);
    };

    fetchData();
  }, []);

  const companies = complist.map((company) => {
    return (
      <Company
        key={company._id}
        entity={company.entity}
        location={company.location}
        contact={company.contact}
        title={company.title}
        email={company.email}
        link={company.link}
      />
    );
  });

  return (
    <div className="Companies-body">
      <div className="Companies-header">
        <h1>Browse this list of partner companies who are currently hiring!</h1>
        <section className="Companies">{companies}</section>
      </div>
    </div>
  );
};

export default Companies;
