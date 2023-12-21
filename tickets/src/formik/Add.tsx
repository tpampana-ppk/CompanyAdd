// ParentComponent.tsx
import AdminAddForm from "./MyForm";

import {useState} from 'react'


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
const AddComponent = () => {
  const [initialFormData,setInitialFormData]=useState<FormData>(
    {
      firstName: '',
      middleName:'',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:'',
      option1: false,
      option2: false
    })
 
  const handleFormData = (formData:FormData) => {
    setInitialFormData(formData);
    console.log(initialFormData)
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <AdminAddForm initialFormData={initialFormData} onSubmit={handleFormData} />
    </div>
  );
};

export default AddComponent;