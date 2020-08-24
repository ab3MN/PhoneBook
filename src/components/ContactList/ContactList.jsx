import React from 'react';
import T from 'prop-types';
import Contact from '../Contact/Contact';

const ContactList = ({ items, onDelete }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Contact
          {...item}
          onDelete={() => {
            onDelete(item.id);
          }}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: T.func.isRequired,
};

export default ContactList;
