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
} from '@mui/material';
import { fetchSignup } from 'api/userApi';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'store/user/userThunk';
// import { schema } from './ValidationShema';
import { object, string } from 'yup';

export const schema = object().shape({
  name: string('Enter your name')
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format.'
    )
    .required('This field is required'),
  email: string('Enter your email')
    .email('Enter a valid email')
    .trim()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format.'
    )
    .required('This field is required'),
  password: string('Enter your password')
    .trim()
    .matches(/^(?=.*[A-Z])\S{8,}$/, 'Invalid password format.')
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
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
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
      />
      {/* <TextField
        //id="standard-basic"
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="standard"
        value={formik.values?.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      /> */}
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          value={formik.values?.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
      </FormControl>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Registration
      </Button>
    </Box>
  );
};

export default UserRegistration;
