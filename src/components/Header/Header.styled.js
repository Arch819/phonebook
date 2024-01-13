export const HeaderStyle = {
  width: '100%',
  background: '#003530',
  position: 'fixed',
  zIndex: '99',
  boxShadow: '0 1px 5px 0 #1f1f1f',
};

export const NavLinkStyle = {
  minWidth: 100,
  padding: '10px 0',
  color: '#aeaeae',
  textDecoration: 'none',
  textTransform: 'uppercase',

  '&:is(:hover,:focus),&.active': {
    color: '#f1f1f1',
  },
};

export const LogOutStyle = {
  fontSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '0.08px',
  color: '#aeaeae',
  textTransform: 'uppercase',
  padding: '0',

  '&:is(:hover,:focus)': {
    color: 'rgb(255, 69, 69)',
  },
};

export const ProfileLinkStyle = {
  fontSize: '14px',
  lineHeight: '1.5',
  letterSpacing: '0.08px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '#aeaeae',
  '&:is(:hover,:focus)': {
    color: 'rgb(255, 69, 69)',
  },
};

export const SettingProfileStyle = {
  padding: '8px',
  justifyContent: 'center',
};
