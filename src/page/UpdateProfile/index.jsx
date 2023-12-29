import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfileThunk } from 'store/user/userThunk';

function UpdateProfile() {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProfileThunk(file));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
