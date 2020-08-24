import React from 'react';
import T from 'prop-types';

const Contact = ({ name, number, onDelete }) => (
  <div>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  onDelete: T.func.isRequired,
};

export default Contact;
