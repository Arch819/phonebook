import { Avatar, Box, Button, Typography } from '@mui/material';
import { Container } from 'components/App.styled';
import { ContactChange } from 'components/ContactItem/ContactItem.styled';
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectContacts } from 'store/contacts/selector';
import { selectProfile } from 'store/user/userSelectors';

function UserInfo() {
  const { name, email, avatarURL, verify } = useSelector(selectProfile);
  const contacts = useSelector(selectContacts);
  console.log(verify);

  const onChangeContact = () => {};
  return (
    <Container>
      <Avatar
        alt={name}
        src={
          avatarURL.includes('gravatar')
            ? avatarURL
            : `http://localhost:8000/${avatarURL}`
        }
        sx={{ width: 150, height: 150, margin: '0 auto' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h2" component="h2">
            {name}
          </Typography>
          <ContactChange type="button" onClick={() => onChangeContact('name')}>
            <BsPencil />
          </ContactChange>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            position: 'relative',
          }}
        >
          <GoDotFill
            color={verify ? '#595' : '#955'}
            title={verify ? 'Verified' : 'Not verified'}
          />
          <Typography variant="p" component="p">
            {email}
          </Typography>
          <ContactChange type="button" onClick={() => onChangeContact('email')}>
            <BsPencil />
          </ContactChange>
          {!verify && (
            <Button
              sx={{
                fontSize: '10px',
                position: 'absolute',
                top: '0',
                right: '-100px',
              }}
            >
              confirm email
            </Button>
          )}
        </Box>
        <Typography variant="p" component="p">
          Contacts: {contacts.length}
        </Typography>
      </Box>
      <Link to="update">Update profile</Link>
    </Container>
  );
}

export default UserInfo;
