import React from 'react';
import T from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => (
  <ul className={styles.contact_list}>
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
