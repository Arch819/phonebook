import UserLogin from 'components/Forms/UserLogin';
import { Section } from 'components/Section.styled';

const LoginPage = () => {
  return (
    <Section>
      <h1>Login</h1>
      <UserLogin />
    </Section>
  );
};

export default LoginPage;
