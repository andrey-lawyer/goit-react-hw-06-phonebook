import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from './../data/initialContacts.json';
import { checkContact } from './checkСontact';

const userSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [...initialContacts],
    // filter: '',
  },
  reducers: {
    addContact(state, action) {
      const check = checkContact(state, action);
      !check && state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    // filterContact(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

const persistConfig = {
  key: 'contactsUser',
  storage,
  whitelist: ['contacts'],
};

export const storageReducer = persistReducer(persistConfig, userSlice.reducer);

export const {
  addContact,
  deleteContact,
  //  filterContact
} = userSlice.actions;
