import { configureStore } from '@reduxjs/toolkit';

import { ContactReducer } from './contactsSlice';
import { FilterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filters: FilterReducer,
  },
});
