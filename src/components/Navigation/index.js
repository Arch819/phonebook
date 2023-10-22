import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';

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
        <Typography sx={{ minWidth: 100 }} component={NavLink} to="/">
          Contact
        </Typography>
      </Box>
      <UserMenu />
    </Box>
  );
};

export default Navigation;
