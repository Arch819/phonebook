import { NavLink, Navigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectProfile } from 'store/user/userSelectors';
import { logoutThunk } from 'store/user/userThunk';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectProfile);

  const handleLogOut = () => {
    dispatch(logoutThunk());
    Navigate({ to: '/login' });
  };

  return (
    <>
      {!isLoggedIn ? (
        <Box>
          <Typography sx={{ minWidth: 100 }} component={NavLink} to="/login">
            Login
          </Typography>
          <Typography
            sx={{ minWidth: 100 }}
            component={NavLink}
            to="/registration"
          >
            Registration
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography component="span">Hello: {name}</Typography>
          <Button
            sx={{ minWidth: 100 }}
            variant="outlined"
            onClick={handleLogOut}
          >
            LogOut
          </Button>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
