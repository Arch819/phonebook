import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProfile } from 'store/user/userSelectors';

const Profile = () => {
  const { name, email, photo } = useSelector(selectProfile);

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <img
        src={
          photo.includes('gravatar') ? photo : `http://localhost:8000/${photo}`
        }
        alt={name}
        width="200"
      />
      <Link to="update">Update profile</Link>
    </div>
  );
};

export default Profile;
