import AdminAddForm from "./MyForm";

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
const EditComponent = () => {

  const initialFormData = {
    firstName: 'John',
    middleName:'tejesh',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: '1234',
    confirmPassword:'1234',
    option1: true,
    option2: true
  };

  const handleFormData = (formData:FormData) => {
    console.log('Received form data:', formData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <AdminAddForm initialFormData={initialFormData} onSubmit={handleFormData} />
    </div>
  );
};

export default EditComponent;