import React from 'react';
import T from 'prop-types';
import { v1 as uuidv1 } from 'uuid';
import styles from './ContactFilter.module.css';

const filterInputId = uuidv1();

const ContactFilter = ({ onChangeFilter }) => (
  <form className={styles.form}>
    <label htmlFor={filterInputId}>
      Find contacts by name
      <input
        type="text"
        id={filterInputId}
        onChange={onChangeFilter}
        className={styles.input}
      />
    </label>
  </form>
);

ContactFilter.propTypes = {
  onChangeFilter: T.func.isRequired,
};

export default ContactFilter;
