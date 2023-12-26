import axios from "axios";
import { MyFormData1 } from "../types/formTypes";
import { Admin, Simulation, Tutorial } from "../types/types";

// const authToken=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6ImIzZWYyYjYyLWVmYmEtNDIzMi04ZjMzLTA3NzBiMjUyODdiOSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDMyMzI1OTEsImV4cCI6MTcwMzI0MjU5MX0.q6qs4YEimpAPUptFOQGX0gKfgmcnTMsUqUZicADXCQg`

const baseUrl = 'https://dev-admin.sunrises.io/api/';

export const getSimulations = async(authToken:string) =>{
    const url = 'get-all-simulations';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Simulation[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}

export const getTutorials = async(authToken:string) =>{
    const url = 'get-tutorials';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Tutorial[] | undefined = response.data;
    console.log(data);
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}


export const getAdmins = async(authToken:string) =>{
    const url = 'get-users?_id=123&params=companyadmin';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Admin[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}


export const postData = async(formData:MyFormData1,authToken:string) =>{

const updatedFormData = {
  ...formData,
  enableSSO: false
};

const updatedFormData1 = {
  ...updatedFormData,
  sso : {}
};
  console.log(updatedFormData1)
  const url = 'create-company';
  const response = await fetch(baseUrl+url, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData1),
  });    
  if (response.ok) {
       return response;
    } else {
      console.error('Failed to post data:', response.status, response.statusText);
    }

}












