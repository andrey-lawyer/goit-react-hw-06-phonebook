export const checkContact = (state, action) => {
  const isInConacts = state.contacts.some(
    ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
  );
  if (isInConacts) {
    alert(`${action.payload.name} is already in contacts`);
    return true;
  }
};
