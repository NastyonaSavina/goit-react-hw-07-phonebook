import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectedFilter = state => state.filter;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectedFilter],
    (contacts, filters) => {
        if (filters === '') {
            return contacts;
        } else {
           const normalizedFilter = filters.toLowerCase();
            return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
    ); 
      }
    
  }
);