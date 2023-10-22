import { Container, Heading } from 'components/App.styled';
import { Section } from 'components/Section.styled';
import UserRegistration from 'components/Forms/UserRegistration';

const RegistrationPage = () => {
  return (
    <Section>
      <Container>
        <Heading>Registration</Heading>
        <UserRegistration />
      </Container>
    </Section>
  );
};

export default RegistrationPage;
