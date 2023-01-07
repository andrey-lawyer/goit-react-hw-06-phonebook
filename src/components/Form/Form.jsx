import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/userSlice';
import { nanoid } from 'nanoid';
import { FormUser, LabelUser, InputUser, ButtonAdd } from './Form.styled';

const loginInputIdName = nanoid();
const loginInputIdNumber = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const data = { name, number };

    dispatch(addContact({ ...data, id: nanoid() }));

    form.elements.number.value = '';
    form.elements.name.value = '';
  };

  return (
    <div>
      <FormUser onSubmit={handleSubmit}>
        <LabelUser htmlFor={loginInputIdName}>Name</LabelUser>
        <InputUser
          id={loginInputIdName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <LabelUser htmlFor={loginInputIdNumber}>Number</LabelUser>
        <InputUser
          id={loginInputIdNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </FormUser>
    </div>
  );
};

export default ContactForm;
