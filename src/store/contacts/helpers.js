export const handleGetContactFulfilled = (state, { payload }) => {
  state.contacts = payload;
};
export const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.push(payload);
};
export const handleDeleteContactFulfilled = (state, { meta: { arg } }) => {
  state.contacts = state.contacts.filter(contact => contact._id !== arg);
};

export const handleChangeContactFulfilled = (state, { payload }) => {
  state.contacts = state.contacts.map(contact => {
    if (contact.id === payload.id) {
      return (contact = payload);
    } else {
      return contact;
    }
  });
};
