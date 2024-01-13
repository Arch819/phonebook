export const FormStyled = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '0 auto 20px',

  '& label': {
    color: '#aeaeae',
  },
  '& input': {
    padding: '5px',
  },
};

export const ButtonSubmit = {
  margin: '10px auto 0',
  borderRadius: '10px',
  position: 'relative',
  width: '180px',
  height: '40px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  border: '1px solid #34974d',
  backgroundColor: '#3aa856',

  '&, & span': {
    transition: 'transform 0.3s, background 0.3s',
  },

  '&:is(:hover,:focus)': {
    background: '#34974d',
  },
  '&:active': {
    border: '1px solid #2e8644',
  },
};

export const ButtonText = {
  transform: 'translateX(-15px)',
  color: '#fff',
  fontWeight: '600',
  transition: 'color 0.3s',

  'button:is(:hover,:focus) &': {
    // color: 'transparent',
  },
};

export const ButtonIcon = {
  position: 'absolute',
  transform: 'translateX(145px)',
  height: '100%',
  width: '180px',
  backgroundColor: '#34974d',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.2s',

  '& svg': {
    width: '30px',
    strokeWidth: 2,
    stroke: '#fff',
  },

  'button:is(:hover,:focus) &': {
    justifyContent: 'center',

    transform: 'translateX(0)',
  },
};
