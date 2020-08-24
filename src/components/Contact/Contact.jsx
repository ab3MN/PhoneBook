import React from 'react';
import T from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.contact}>
    <p className={styles.name}>{name}</p>
    <p className={styles.number}>{number}</p>
    <button type="button" onClick={onDelete} className={styles.btn}>
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
