import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filter/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter.contacts);

  const onChange = ({ currentTarget }) => {
    const filterValue = currentTarget.value.trim();
    dispatch(changeFilter(filterValue));
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        name="filter"
        label="Find contacts by name"
        variant="standard"
        value={filter}
        onChange={onChange}
        InputLabelProps={{
          style: {
            color: '#aeaeae',
          },
        }}
        InputProps={{ style: { color: '#aeaeae' } }}
      />
    </Box>
  );
};
