import React from 'react';

import './Person.css';
import emailImage from '../../img/mail.png';

const style = { fontWeight: 'normal' };

const person = (props) => (
  <article className="Person">
    <h1>{props.name}</h1>
    <p>Worked as: {props.work}</p>
    <p>{props.title}</p>
    <p>{props.department}</p>
    <p>{props.country}</p>
    <div className="linkedin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 
                2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        />
      </svg>
      <a
        href={props.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        LinkedIn
      </a>
    </div>
    <div className="email">
      <img src={emailImage} alt="email" className="emailImage" />
      <p>{props.email}</p>
    </div>
  </article>
);

export default person;
