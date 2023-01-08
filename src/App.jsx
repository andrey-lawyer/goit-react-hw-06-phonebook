import { useSelector } from 'react-redux';
import ContactForm from './components/Form';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';
import { PhoneBook, TitleH1, TitleH2, Message } from 'App.styled';

const App = () => {
  const user = useSelector(state => state.contact.contacts);
  // const filterUser = useSelector(state => state.contact.filter);
  const filterUser = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterUser.toLowerCase();
    return user.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <PhoneBook>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      {user.length === 0 ? (
        <Message>Your phone book is empty, add a contact</Message>
      ) : (
        <>
          <Filter value={filterUser} />
          <ContactList contact={visibleContacts} />
        </>
      )}
    </PhoneBook>
  );
};

export default App;
