import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    const contactList = sortContactsList(filteredContacts);
    return contactList;
  }
);

function sortContactsList(contacts) {
  if (!contacts) {
    return [];
  }
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  const favorites = contacts.filter(contact => contact.favorite === true);
  const nonFavorites = contacts.filter(contact => contact.favorite !== true);
  const sortedContacts = favorites.concat(nonFavorites);

  return sortedContacts;
}
