import React from 'react';
import T from 'prop-types';
import { v1 as uuidv1 } from 'uuid';

const filterInputId = uuidv1();

const ContactFilter = ({ onChangeFilter }) => (
  <article>
    <label htmlFor={filterInputId}>
      Find contacts by name
      <input type="text" id={filterInputId} onChange={onChangeFilter} />
    </label>
  </article>
);

ContactFilter.propTypes = {
  onChangeFilter: T.func.isRequired,
};

export default ContactFilter;
