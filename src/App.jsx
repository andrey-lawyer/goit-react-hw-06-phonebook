import { useSelector } from 'react-redux';

import { selectContacts } from './redux/contacts/selectContacts';
import { selectFilter } from './redux/filter/selectFilter';

import ContactForm from './components/Form';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';

import { PhoneBook, TitleH1, TitleH2, Message } from 'App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <PhoneBook>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      {contacts.length === 0 ? (
        <Message>Your phone book is empty, add a contact</Message>
      ) : (
        <>
          <Filter value={filter} />
          <ContactList contacts={visibleContacts} />
        </>
      )}
    </PhoneBook>
  );
};

export default App;
