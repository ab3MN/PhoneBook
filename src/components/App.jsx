import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import ContactFilter from './ContactFilter/ContactFilter';
import filterContacts from './ContactFilter/filter';

const notyf = new Notyf();

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  addContact = contact => {
    const { name, number } = contact;
    const { contacts } = this.state;

    if (!name) {
      notyf.error('Enter name');
    } else if (!parseFloat(number)) {
      notyf.error('Enter number');
    } else {
      const sameContact = contacts.find(el => el.name === name);

      if (sameContact) {
        notyf.error(`${name} contact is allready exist`);
      } else {
        const contactToAdd = {
          ...contact,
          id: uuidv1(),
        };
        this.setState(state => ({
          contacts: [...state.contacts, contactToAdd],
        }));
        notyf.success(`${name}`);
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
    const { contacts, filter } = this.state;
    const FiltredContacts = filterContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <ContactFilter onChangeFilter={this.changeFilter} />
        <ContactList items={FiltredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
