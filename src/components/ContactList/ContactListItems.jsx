import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItems = ({
  name,
  contacts,
  number,
  onDeleteContact,
}) => {
  return (
    <li>
      <p>
        {contacts}: {name}: {number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactListItems;
