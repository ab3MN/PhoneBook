import React, { Component } from 'react';
import T from 'prop-types';
import inputId from './inputId';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={inputId.name}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter contact name..."
            id={inputId.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor={inputId.number}>
          Number
          <input
            type="text"
            name="number"
            placeholder="Enter contact number..."
            id={inputId.number}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
