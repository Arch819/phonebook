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

  const { id, name, number } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { name: e.target.elements.name.value, number: number };
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
      dispatch(changeContactThunk({ id, inputValue }));
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

export const ChangeNumber = ({ contact, onChangeContact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { name: name, number: e.target.elements.number.value };
    if (number !== inputValue.number) {
      dispatch(changeContactThunk({ id, inputValue }));
      Notify.success(
        `The phone number of contact <b style={color:red}>${name}</b> has been successfully changed."`
      );
    }
    onChangeContact('number');
  };
  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onChangeContact('number');
    }
  };

  return (
    <InputBox>
      <form onSubmit={handleChangeContact} onBlur={e => handleBlur(e)}>
        <ChangeInput
          type="tel"
          name="number"
          defaultValue={number}
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
