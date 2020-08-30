import React, { Component } from 'react';
import T from 'prop-types';

import styles from './Phonebook.module.css';
import inputPhoneId from '../../helpers/inputPhoneId';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onAddContact: T.func.isRequired,
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.reset();

    const { elements } = e.target;
    elements.name.value = '';
    elements.number.value = '';
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={inputPhoneId.name} className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter contact name..."
            mask="+99(999)999-99-99"
            id={inputPhoneId.name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <br />
        <label htmlFor={inputPhoneId.number} className={styles.label}>
          Number
          <input
            type="text"
            name="number"
            placeholder="Enter contact number..."
            id={inputPhoneId.number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <br />

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
