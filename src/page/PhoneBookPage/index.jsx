import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { FormAddContact } from 'components/Forms/FormAddContact';
import { Section } from 'components/Section.styled';

const PhoneBookPage = () => {
  return (
    <Section>
      <h2>Phonebook</h2>
      <FormAddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
};

export default PhoneBookPage;
