import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectProfile } from 'store/user/userSelectors';
import { logoutThunk } from 'store/user/userThunk';
import {
  LogOutStyle,
  NavLinkStyle,
  ProfileLinkStyle,
  SettingProfileStyle,
} from 'components/Header/Header.styled';
import { useState } from 'react';

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarURL } = useSelector(selectProfile);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  const handleOpenUserMenu = e => {
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Chip
                sx={{
                  gap: '10px',
                  color: '#aeaeae',
                }}
                icon={
                  <Avatar
                    alt={name}
                    src={
                      avatarURL.includes('gravatar')
                        ? avatarURL
                        : `http://localhost:8000/${avatarURL}`
                    }
                    sx={{ width: 24, height: 24, margin: '0 auto' }}
                  />
                }
                label={name}
                variant="filled"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem sx={SettingProfileStyle} onClick={handleCloseUserMenu}>
              <Typography
                sx={ProfileLinkStyle}
                component={NavLink}
                to="profile"
              >
                Profile
              </Typography>
            </MenuItem>
            <MenuItem sx={SettingProfileStyle} onClick={handleCloseUserMenu}>
              <Button sx={LogOutStyle} onClick={handleLogOut}>
                LogOut
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
