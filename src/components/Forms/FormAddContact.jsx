import { boolean, object, string } from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Notify, Report } from 'notiflix';
import { addContactThunk } from 'store/contacts/contactsThunk';
import { selectContacts } from 'store/contacts/selector';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {
  ButtonIcon,
  ButtonSubmit,
  FormStyled,
  ButtonText,
} from './FormAddContact.styled';

const category = ['all', 'friends', 'work', 'family'];

export const schema = object().shape({
  name: string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format.'
    )
    .required('This field is required'),
  phone: string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('This field is required'),
  email: string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format.'
    ),
  favorite: boolean().default(false),
  category: string()
    .oneOf([...category])
    .default('all'),
});

const initialValues = {
  name: '',
  phone: '',
  email: '',
  favorite: false,
  category: 'all',
};

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = value => {
    const identicalContactName = contacts?.some(
      ({ name }) => value.name === name
    );
    if (identicalContactName) {
      return Report.warning(
        'WARNING',
        `${value.name} is already in contacts`,
        'ok'
      );
    }
    dispatch(addContactThunk(value));
    Notify.success(`Contact ${value.name} has been successfully added`);
  };
  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={FormStyled}>
      <Typography
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#aeaeae',
        }}
        component="h2"
      >
        Add contact
      </Typography>
      <TextField
        name="name"
        label="Name*"
        variant="standard"
        value={formik.values?.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        InputProps={{ style: { color: '#aeaeae' } }}
      />
      <TextField
        name="phone"
        label="Phone*"
        variant="standard"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={formik.values?.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        InputProps={{ style: { color: '#aeaeae' } }}
      />
      <TextField
        name="email"
        label="Email"
        variant="standard"
        title="Please enter a valid email address. It should follow the pattern: [username]@[domain].[TLD]"
        value={formik.values?.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputProps={{ style: { color: '#aeaeae' } }}
      />

      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel
          sx={{
            color: '#aeaeae',
          }}
          id="demo-simple-select-label"
        >
          Category
        </InputLabel>
        <Select
          sx={{
            color: '#aeaeae',
          }}
          name="category"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.value?.category}
          label="Category"
          defaultValue={'all'}
          onChange={formik.handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'family'}>Family</MenuItem>
          <MenuItem value={'friends'}>Friends</MenuItem>
          <MenuItem value={'work'}>Work</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        sx={{
          '& .MuiFormControlLabel-label': { color: '#aeaeae' },
          '& .Mui-checked ~ .MuiFormControlLabel-label': { color: '#1976d2' },
        }}
        name="favorite"
        control={
          <Checkbox
            checked={formik.values?.favorite}
            onChange={formik.handleChange}
          />
        }
        label="Favorite"
        labelPlacement="end"
      />
      <Button variant="contained" fullWidth type="submit" sx={ButtonSubmit}>
        <Typography sx={ButtonText}>Add contact</Typography>
        <Typography sx={ButtonIcon}>
          <svg
            // className="svg w-8 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </Typography>
      </Button>
      {/* <button type="button" onClick={() => handleTest()}>
            test
          </button> */}
    </Box>
  );
};
