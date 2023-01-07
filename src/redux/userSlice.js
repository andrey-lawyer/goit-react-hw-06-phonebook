import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from './../data/initialContacts.json';

console.log(initialContacts);
const userSlice = createSlice({
  name: 'contact',
  initialState: {
    // contacts: [],
    contacts: [...initialContacts],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const isInConacts = state.contacts.some(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isInConacts) {
        return alert(`${action.payload.name} is already in contacts`);
      }
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload
      // );
      // state.contacts.splice(index, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contactsUser',
  storage,
  whitelist: ['contacts'],
};

export const storageReducer = persistReducer(persistConfig, userSlice.reducer);

export const { addContact, deleteContact, filterContact } = userSlice.actions;
