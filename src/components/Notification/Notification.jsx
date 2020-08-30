import React from 'react';
import T from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message, color }) => (
  <div className={styles.notification} style={{ backgroundColor: color }}>
    {message}
  </div>
);

Notification.propTypes = {
  message: T.string.isRequired,
  color: T.string.isRequired,
};

export default Notification;
