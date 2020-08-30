import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import ContactFilter from './ContactFilter/ContactFilter';
import contactsFilter from '../helpers/contactsFilter';
import Notification from './Notification/Notification';

import styles from './App.module.css';
import slideHeader from '../transitions/slideHeader.module.css';
import slideAlert from '../transitions/slideAlert.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '0444591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '0444438912' },
      { id: 'id-3', name: 'Eden Clements', number: '0446451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '0442279126' },
    ],
    filter: '',
    isVisible: false,
    message: '',
    color: '',
  };

  componentDidMount() {
    const fromLS = localStorage.getItem('contacts');
    if (fromLS) {
      const contacts = JSON.parse(fromLS);

      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(p, s) {
    const { contacts } = this.state;

    if (contacts !== s.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  updateMessage = (message, color) => {
    this.setState({
      isVisible: true,
      message,
      color,
    });
    setTimeout(() => {
      this.setState({
        isVisible: false,
        message: '',
      });
    }, 1000);
  };

  addContact = contact => {
    const { name, number } = contact;
    const { contacts } = this.state;

    if (!name || !number) {
      this.updateMessage('Fill in all the fields', '#ffbf00');
    } else if (number.length !== 10) {
      this.updateMessage('The number must contain 10 digits', '#ffbf00');
    } else if (!parseFloat(number)) {
      this.updateMessage('No number entered', '#ffbf00');
    } else {
      const sameContact = contacts.find(el => el.name === name);

      if (sameContact) {
        this.updateMessage(`${name} contact is allready exist`, '#f1392d');
      } else {
        const contactToAdd = {
          ...contact,
          id: uuidv1(),
        };
        this.setState(state => ({
          contacts: [...state.contacts, contactToAdd],
        }));
        this.updateMessage(`${name} `, '#7fff00');
      }
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter, isVisible, message, color } = this.state;
    const FiltredContacts = contactsFilter(contacts, filter);

    return (
      <div>
        <CSSTransition in timeout={500} classNames={slideHeader} appear>
          <h1 className={styles.header}>Phonebook</h1>
        </CSSTransition>
        <Phonebook onAddContact={this.addContact} />

        <ContactFilter onChangeFilter={this.changeFilter} />
        <ContactList items={FiltredContacts} onDelete={this.deleteContact} />

        <CSSTransition
          in={isVisible}
          timeout={250}
          classNames={slideAlert}
          unmountOnExit
        >
          <Notification message={message} color={color} />
        </CSSTransition>
      </div>
    );
  }
}
