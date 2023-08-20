import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
          className={css.input}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          required
          value={this.state.number}
          onChange={this.handleNumberChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
