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
  minWidth: 100,
  borderColor: '#f1f1f1',
  color: '#aeaeae',
  marginLeft: '10px',

  '&:is(:hover,:focus)': {
    borderColor: 'rgb(255, 69, 69)',
  },
};
