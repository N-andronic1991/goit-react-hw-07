import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestContacts,
  addingContact,
  deletingContact,
} from '../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts / fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await requestContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts / addContact',
  async (contact, thunkApi) => {
    try {
      const data = await addingContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const data = await deletingContact(contactId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
