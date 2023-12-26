// import React from 'react';
// import {
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Container,
//   InputAdornment,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// interface FormData {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   option1: boolean;
//   option2: boolean;
//   [key: string]: string | boolean;
// }

// interface FormErrors {
//   firstName: boolean;
//   lastName: boolean;
//   email: boolean;
//   password: boolean;
//   confirmPassword: boolean;
// }

// const AdminAddForm: React.FC = () => {
//   const [formData, setFormData] = React.useState<FormData>({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     option1: false,
//     option2: false,
//   });

//   const [formErrors, setFormErrors] = React.useState<FormErrors>({
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//     confirmPassword: false,
//   });

//   const [passwordVisibility, setPasswordVisibility] = React.useState(false);
//   const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
//     React.useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     setFormErrors({
//       ...formErrors,
//       [name]: value.trim() === '' && name !== 'middleName',
//     });
//   };

//   const handleBlur = (name: string): void => {
//     setFormErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]:
//         (typeof formData[name] === 'string'
//           ? (formData[name] as string).trim()
//           : '') === ''
//           ? `${name} is required`
//           : '',
//     }));
//   };

//   const handleTogglePasswordVisibility = (): void => {
//     setPasswordVisibility(!passwordVisibility);
//   };

//   const handleToggleConfirmPasswordVisibility = (): void => {
//     setConfirmPasswordVisibility(!confirmPasswordVisibility);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();

//     const newFormErrors: FormErrors = {
//       firstName: formData.firstName.trim() === '',
//       lastName: formData.lastName.trim() === '',
//       email: formData.email.trim() === '',
//       password: formData.password.trim() === '',
//       confirmPassword:
//         formData.confirmPassword.trim() === '' ||
//         formData.confirmPassword !== formData.password,
//     };

//     setFormErrors(newFormErrors);

//     const isFormComplete =
//       Object.values(newFormErrors).every((error) => !error) &&
//       Object.values(formData).every(
//         (value) => typeof value === 'string' && value.trim() !== ''
//       );

//     if (isFormComplete) {
//       console.log('Form submitted:', formData);
//     } else {
//       console.log('Form has errors. Please correct them.');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="md">
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '100vh',
//         }}
//       >
//         <div
//           style={{
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             width: '100%',
//             padding: '20px',
//           }}
//         >
//           <Typography component="h1" variant="h5" sx={{color:'black'}}>
//             Add Site Admin 1
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   label="First Name"
//                   type="text"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('firstName')}
//                   error={formErrors.firstName}
//                   helperText={
//                     formErrors.firstName && 'First Name is required'
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   label="Middle Name"
//                   type="text"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="middleName"
//                   value={formData.middleName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   label="Last Name"
//                   type="text"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('lastName')}
//                   error={formErrors.lastName}
//                   helperText={
//                     formErrors.lastName && 'Last Name is required'
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Email"
//                   type="email"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('email')}
//                   error={formErrors.email}
//                   helperText={formErrors.email && 'Email is required'}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <FormControlLabel sx={{color:'black'}}
//                   control={
//                     <Checkbox
//                       name="option1"
//                       checked={formData.option1}
//                       onChange={handleInputChange}
//                     />
//                   }
//                   label="Login as SSO"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Password"
//                   type={passwordVisibility ? 'text' : 'password'}
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('password')}
//                   error={formErrors.password}
//                   helperText={
//                     formErrors.password && 'Password is required'
//                   }
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={handleTogglePasswordVisibility}
//                           edge="end"
//                         >
//                           {passwordVisibility ? (
//                             <VisibilityOff />
//                           ) : (
//                             <Visibility />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Confirm Password"
//                   type={
//                     confirmPasswordVisibility ? 'text' : 'password'
//                   }
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('confirmPassword')}
//                   error={formErrors.confirmPassword}
//                   helperText={
//                     formErrors.confirmPassword &&
//                     'Passwords do not match or are empty'
//                   }
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={handleToggleConfirmPasswordVisibility}
//                           edge="end"
//                         >
//                           {confirmPasswordVisibility ? (
//                             <VisibilityOff />
//                           ) : (
//                             <Visibility />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <FormControlLabel sx={{color:'black'}}
//                   control={
//                     <Checkbox
//                       name="option2"
//                       checked={formData.option2}
//                       onChange={handleInputChange}
//                     /> 
//                   }
//                   label="Is Instructor"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   disabled={
//                     Object.entries(formData).some(
//                       ([key, value]) =>
//                         typeof value === 'string' &&
//                         value.trim() === '' &&
//                         key !== 'middleName'
//                     )
//                   }
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default AdminAddForm;





















import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  option1: boolean;
  option2: boolean;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.mixed()
    .test(
      'password-match',
      'Passwords must match',
      function (value) {
        return value === this.resolve(Yup.ref('password'));
      }
    )
    .required('Confirm Password is required'),
  option1: Yup.boolean(),
  option2: Yup.boolean(),
});


const AdminAddForm: React.FC = () => {
  const formik = useFormik<FormData>({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      option1: false,
      option2: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <Container component="main" maxWidth="md">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            padding: '20px',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
            Add Site Admin 1
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="First Name"
                  type="text"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Middle Name"
                  type="text"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="middleName"
                  value={formik.values.middleName}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Last Name"
                  type="text"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  sx={{ color: 'black' }}
                  control={
                    <Checkbox
                      name="option1"
                      checked={formik.values.option1}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Login as SSO"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  type={formik.values.option1 ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => formik.setFieldValue('option1', !formik.values.option1)}
                          edge="end"
                        >
                          {formik.values.option1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  type={formik.values.option1 ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => formik.setFieldValue('option1', !formik.values.option1)}
                          edge="end"
                        >
                          {formik.values.option1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  sx={{ color: 'black' }}
                  control={
                    <Checkbox
                      name="option2"
                      checked={formik.values.option2}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Is Instructor"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!formik.isValid}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AdminAddForm;


