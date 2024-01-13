import { useState } from 'react';
import { MdDelete, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import {
  ContactChange,
  ContactData,
  ContactDelete,
  ContactFavorite,
  ContactItemEl,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';
import {
  changeContactThunk,
  deleteContactThunk,
} from 'store/contacts/contactsThunk';
import { ChangeName, ChangePhone } from 'components/ChangeContactForm';
// const ChangeName = lazy(() => import('components/ChangeContactForm'));
// const ChangeNumber = lazy(() => import('components/ChangeContactForm'));

export const ContactItem = ({ contact }) => {
  const [changeName, setChangeName] = useState(false);
  const [changePhone, setChangePhone] = useState(false);
  const { _id: contactId, name, phone, favorite } = contact;
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContactThunk(contactId));
    Notify.warning(`Contact ${name} has been deleted`);
  };
  const addToFavorite = () => {
    const inputValue = { favorite: !favorite };
    dispatch(changeContactThunk({ contactId, inputValue }));
  };

  const onChangeContact = input => {
    input === 'name'
      ? setChangeName(prev => !prev)
      : setChangePhone(prev => !prev);
  };

  return (
    <ContactItemEl>
      <ContactFavorite type="button" onClick={() => addToFavorite()}>
        {favorite ? (
          <MdFavorite style={{ fill: '#f90' }} />
        ) : (
          <MdFavoriteBorder />
        )}
      </ContactFavorite>
      <ContactData>
        {!changeName ? (
          <ContactName>
            <ContactChange
              type="button"
              onClick={() => onChangeContact('name')}
            >
              <BsPencil />
            </ContactChange>
            {name}:{' '}
          </ContactName>
        ) : (
          <ChangeName contact={contact} onChangeContact={onChangeContact} />
        )}
        {!changePhone ? (
          <ContactPhone>
            {phone}
            <ContactChange
              type="button"
              onClick={() => onChangeContact('phone')}
            >
              <BsPencil />
            </ContactChange>
          </ContactPhone>
        ) : (
          <ChangePhone contact={contact} onChangeContact={onChangeContact} />
        )}
      </ContactData>
      <ContactDelete type="button" onClick={() => deleteContact()}>
        <MdDelete />
      </ContactDelete>
    </ContactItemEl>
  );
};
