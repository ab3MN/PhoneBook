import React from 'react';
import T from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import pop from '../../transitions/pop.module.css';

const ContactList = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className={styles.contact_list}>
    {items.map(item => (
      <CSSTransition
        key={item.id}
        in={items.length > 1}
        timeout={250}
        classNames={pop}
        unmountOnExit
      >
        <li>
          <Contact
            {...item}
            onDelete={() => {
              onDelete(item.id);
            }}
          />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
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
