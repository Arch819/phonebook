import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { FormAddContact } from 'components/Forms/FormAddContact';
import { Container, Heading, Section } from 'components/App.styled';
import CategoryContacts from 'components/CategoryContacts';
import { useState } from 'react';
import ModalTemplate from 'components/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';

const PhoneBookPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Section>
        <Container>
          <Heading>PhoneBook</Heading>
        </Container>
      </Section>
      <Section>
        <Container>
          <Filter />
          <CategoryContacts />
          <ContactList />
        </Container>
        <ModalTemplate open={openModal} handleClose={handleOpenModal}>
          <IconButton
            aria-label="close"
            sx={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              padding: '0',
              color: '#34974d',
            }}
            onClick={handleCloseModal}
          >
            <HighlightOffIcon />
          </IconButton>
          <FormAddContact />
        </ModalTemplate>
        <button onClick={handleOpenModal}>Open modal</button>
      </Section>
    </>
  );
};

export default PhoneBookPage;
