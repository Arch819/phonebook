import { Box, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import Logo from '../../images/logo.svg';
import { NavLinkStyle } from 'components/Header/Header.styled';

const Navigation = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography sx={NavLinkStyle} component={NavLink} to="/">
          Contacts
        </Typography>
        <Typography sx={NavLinkStyle} component={NavLink} to="/newpage">
          NewPage
        </Typography>
      </Box>
      <Box>
        <Link to="/">
          <img src={Logo} alt="logo" width={80} />
        </Link>
      </Box>
      <UserMenu />
    </Box>
  );
};

export default Navigation;
