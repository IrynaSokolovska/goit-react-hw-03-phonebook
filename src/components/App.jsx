import { Component } from "react";
import { Layout } from "./Layout";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { Container } from "@mui/material";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Title } from "./GlobalStyled";

export class App extends Component  {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

  componentDidMount() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
      
    this.setState({
      contacts: JSON.parse(savedContacts)
    });
  }}
    
componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = (newContact) => {       
    const checkContact = this.state.contacts.some(items => {
     return items.name.trim() === newContact.name.trim()  
    })
    
    if (checkContact) {
      alert(`${newContact.name}  is already in contacts `)
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));  

  };


  handleDeleteContact = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter((contact) => contact.id !== id) }))
  };

  handleChangeFilter = (evt) => { 
    this.setState({ filter: evt.target.value });
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter((contact) => {
      return contact.name.concat(contact.number).toLowerCase().includes(normalizedFilter)
     });
  };

  render(){
    return (
      <Layout>
        <Container maxWidth="xl">
      <Title>Phonebook</Title>
      <AddContactForm addNewContact={this.addContact} />
      <Title>Contacts</Title>
      <Filter handleChangeFilter={this.handleChangeFilter} />      
      <ContactList contacts={this.getFilterContacts()} onDeleteContact={this.handleDeleteContact} />    
        </Container>
      </Layout>
    
    );
  };
};