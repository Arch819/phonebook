import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectProfile } from 'store/user/userSelectors';
import { logoutThunk } from 'store/user/userThunk';
import { LogOutStyle, NavLinkStyle } from 'components/Header/Header.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectProfile);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      {!isLoggedIn ? (
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Typography sx={NavLinkStyle} component={NavLink} to="/login">
            Login
          </Typography>
          <Typography sx={NavLinkStyle} component={NavLink} to="/registration">
            Registration
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component="span">Hello: {name}</Typography>
          <Button sx={LogOutStyle} variant="outlined" onClick={handleLogOut}>
            LogOut
          </Button>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
