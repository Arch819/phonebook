import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListStyled, EmptyEl } from './ContactList.styled';
import { getContactThunk } from 'store/contacts/contactsThunk';
import { selectFilteredContacts } from 'store/contacts/selector';
import { selectIsLoggedIn } from 'store/user/userSelectors';
import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectFilteredContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(getContactThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {contactList.length ? (
        <ContactListStyled>
          {contactList.map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </ContactListStyled>
      ) : (
        <EmptyEl>Not found</EmptyEl>
      )}
    </>
  );
};
