import { Container, Heading } from 'components/App.styled';
import UserLogin from 'components/Forms/UserLogin';
import { Section } from 'components/Section.styled';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <Heading>Login</Heading>
        <UserLogin />
      </Container>
    </Section>
  );
};

export default LoginPage;
