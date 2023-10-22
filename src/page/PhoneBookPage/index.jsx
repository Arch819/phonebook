import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { FormAddContact } from 'components/Forms/FormAddContact';
import { Container, Heading, Section } from 'components/App.styled';

const PhoneBookPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>PhoneBook</Heading>
          <FormAddContact />
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Contacts</Heading>
          <Filter />
          <ContactList />
        </Container>
      </Section>
    </>
  );
};

export default PhoneBookPage;
