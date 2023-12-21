import { TextField, Button, Typography, Grid, Container, InputAdornment, IconButton, Checkbox, FormControlLabel} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import { validationSchema  } from './Validation';
import { FormData } from './Types';

interface AdminAddFormProps {
  initialFormData:FormData;
  onSubmit: (formData: FormData) => void;
}

const AdminAddForm= ({ initialFormData, onSubmit }:AdminAddFormProps) => {
  const formik = useFormik<FormData>({
    initialValues: {
      ...initialFormData,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
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