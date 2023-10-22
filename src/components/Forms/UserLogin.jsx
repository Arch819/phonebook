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
import { loginThunk, registrationThunk } from 'store/user/userThunk';
// import { schema } from './ValidationShema';
import { object, string } from 'yup';

export const schema = object().shape({
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
  email: '',
  password: '',
};

const UserLogin = () => {
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
      dispatch(loginThunk(values));
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
        name="email"
        label="Email"
        variant="standard"
        value={formik.values?.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
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
        Login
      </Button>
    </Box>
  );
};

export default UserLogin;
