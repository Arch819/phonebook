import { Box } from '@mui/material';
import { Container } from 'components/App.styled';
import Navigation from 'components/Navigation';
import { HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <Box as="header" sx={HeaderStyle}>
      <Container>
        <Navigation />
      </Container>
    </Box>
  );
};

export default Header;
