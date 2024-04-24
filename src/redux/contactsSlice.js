import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export const selectContacts = state => state.contacts.items;
export const selectFilters = state => state.filters.name;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      // Get all contacts
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add new contact

      .addCase(addContact.pending, state => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete contact by ID
      .addCase(deleteContact.pending, state => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Редюсер слайсу
export const ContactReducer = contactsSlice.reducer;
