import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/contactSlice';
import {
  ButtonDel,
  ItemContact,
  NameUser,
  ListContacts,
} from './ListContacts.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ListContacts>
      {contacts.map(({ name, number, id }) => (
        <ItemContact key={id}>
          <NameUser>{name}:</NameUser>
          <span>{number}</span>
          <ButtonDel type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDel>
        </ItemContact>
      ))}
    </ListContacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
