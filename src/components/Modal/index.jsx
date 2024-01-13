import { Box, Modal } from '@mui/material';

function ModalTemplate({ handleClose, open, children }) {
  return (
    <Modal
      disableEnforceFocus
      sx={{ position: 'fixed' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#1a1a1a',
          padding: '25px 20px 10px',
          borderRadius: '8px',
          boxShadow: '0 0 8px 0 #1f1f1f, 0 0 10px 1px #f1f1f1',
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}

export default ModalTemplate;
