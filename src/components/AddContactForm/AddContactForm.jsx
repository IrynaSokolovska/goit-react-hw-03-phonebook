import styled from '@emotion/styled';

import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';


 const Form = styled.form`  
  display: flex;
  flex-flow: column;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;
  /* flex-direction: column; */
  gap: 16px;
  width: 400px;
`;

const LabelForm = styled.label`
margin: 0;
margin-bottom: 16px;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 1.33; 
letter-spacing: -0.18px;
`;

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          this.props.addNewContact({ id: nanoid(5), ...this.state });
          this.setState({
            name: '',
            number: '',
          });
        }}
      >
        <LabelForm>
          Name
          <input
            id="name"
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelForm>

        <LabelForm>
          Number
          <input
            id="number"
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelForm>

        <Button type="submit" variant="outlined">
          Add contact
        </Button>
      </Form>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default AddContactForm;
