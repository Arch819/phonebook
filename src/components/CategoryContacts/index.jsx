import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

function CategoryContacts() {
  const [category, setCategory] = useState('all');
  const handleChange = e => {
    setCategory(e.target.name);
  };
  return (
    <Tabs
      sx={{
        width: '50%',
        margin: '0 auto',
        marginTop: '20px',
      }}
      value={category}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab
        sx={{
          color: '#f90',
        }}
        label="All"
        name="all"
        value="all"
      />
      <Tab
        sx={{
          color: '#f90',
        }}
        label="Family"
        name="family"
        value="family"
      />
      <Tab
        sx={{
          color: '#f90',
        }}
        label="Friends"
        name="friends"
        value="friends"
      />
      <Tab
        sx={{
          color: '#f90',
        }}
        label="Work"
        name="work"
        value="work"
      />
    </Tabs>
  );
}

export default CategoryContacts;
