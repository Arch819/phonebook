import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'store/user/userThunk';
// import { schema } from './ValidationShema';
import { object, string } from 'yup';
import { UserFormStyle } from './FormLogin.stuled';
import { ButtonSubmit } from './FormAddContact.styled';

export const schema = object().shape({
  name: string('Enter your name')
    .trim()
    // .matches(
    //   // /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    //   'Invalid name format.'
    // )
    .required('This field is required'),
  email: string('Enter your email')
    .email('Enter a valid email')
    .trim()
    // .matches(
    //   // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //   'Invalid email format.'
    // )
    .required('This field is required'),
  password: string('Enter your password')
    .trim()
    // .matches(/^(?=.*[A-Z])\S{8,}$/, 'Invalid password format.')
    .required('This field is required'),
});
const initialValue = {
  name: '',
  email: '',
  password: '',
};

const UserRegistration = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValue,

    validationSchema: schema,
    onSubmit: (values, { handleReset }) => {
      dispatch(registrationThunk(values));
      handleReset();
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={UserFormStyle}>
      <TextField
        type="text"
        id="standard-basic"
        name="name"
        variant="standard"
        label="Name"
        value={formik.values?.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        InputLabelProps={{
          style: { color: '#aeaeae' },
        }}
        InputProps={{ style: { color: '#aeaeae' } }}
      />
      <TextField
        name="email"
        label="Email"
        variant="standard"
        value={formik.values?.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputLabelProps={{
          style: { color: '#aeaeae' },
        }}
        InputProps={{ style: { color: '#aeaeae' } }}
      />
      <FormControl variant="standard">
        <InputLabel
          htmlFor="standard-adornment-password"
          sx={{ color: '#aeaeae' }}
        >
          Password
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          value={formik.values?.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          sx={{ color: '#aeaeae' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {formik.touched.password && (
          <Typography sx={{ color: '#d32f2f' }}>
            {formik.errors.password}
          </Typography>
        )}
      </FormControl>
      <Button variant="contained" fullWidth type="submit" sx={ButtonSubmit}>
        Registration
      </Button>
    </Box>
  );
};

export default UserRegistration;
