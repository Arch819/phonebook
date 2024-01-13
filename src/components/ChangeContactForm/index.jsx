import { AiOutlineSave } from 'react-icons/ai';
import { ContactChange } from 'components/ContactItem/ContactItem.styled';
import { ChangeInput, InputBox } from './ChangeContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify, Report } from 'notiflix';
import { changeContactThunk } from 'store/contacts/contactsThunk';
import { selectContacts } from 'store/contacts/selector';

export const ChangeName = ({ contact, onChangeContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const { _id: contactId, name } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { name: e.target.elements.name.value };
    if (name !== inputValue.name) {
      const identicalContactName = contacts?.some(
        ({ name }) => inputValue.name === name
      );
      if (identicalContactName) {
        return Report.warning(
          'WARNING',
          `${inputValue.name} is already in contacts`,
          'ok'
        );
      }
      dispatch(changeContactThunk({ contactId, inputValue }));
      Notify.success(
        `Contact ${name} has been successfully renamed to ${inputValue.name}`
      );
    }
    onChangeContact('name');
  };
  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onChangeContact('name');
    }
  };
  return (
    <InputBox>
      <form onSubmit={e => handleChangeContact(e)} onBlur={e => handleBlur(e)}>
        <ContactChange type="submit">
          <AiOutlineSave />
        </ContactChange>
        <ChangeInput
          type="text"
          name="name"
          defaultValue={name}
          autoFocus
          placeholder="name*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    </InputBox>
  );
};

export const ChangePhone = ({ contact, onChangeContact }) => {
  const dispatch = useDispatch();

  const { _id: contactId, name, phone } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { phone: e.target.elements.phone.value };
    if (phone !== inputValue.phone) {
      dispatch(changeContactThunk({ contactId, inputValue }));
      Notify.success(
        `The phone number of contact <b style={color:red}>${name}</b> has been successfully changed."`
      );
    }
    onChangeContact('phone');
  };
  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onChangeContact('phone');
    }
  };

  return (
    <InputBox>
      <form onSubmit={handleChangeContact} onBlur={e => handleBlur(e)}>
        <ChangeInput
          type="tel"
          name="phone"
          defaultValue={phone}
          placeholder="phone number*"
          autoFocus
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ContactChange type="submit">
          <AiOutlineSave />
        </ContactChange>
      </form>
    </InputBox>
  );
};
