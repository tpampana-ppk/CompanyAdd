import Yup from 'yup'

export const validationSchema = Yup.object({
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
