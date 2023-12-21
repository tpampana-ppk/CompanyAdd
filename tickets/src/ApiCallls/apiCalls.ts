import axios from "axios";
import { MyFormData } from "../types/formTypes";
import { Admin, Simulation, Tutorial } from "../types/types";
const authToken=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6ImI0ZjkwYmRkLTNlMTctNGRjNS1hYjhkLTdmZDY0Y2U5Yjg0ZSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDMxMzk3MDIsImV4cCI6MTcwMzE0OTcwMn0.2mycmTdIHId_ul4yeEvKh8DTP3fkf1ag7UIQveD-s2k`

const baseUrl = 'https://dev-admin.sunrises.io/api/';

export const getSimulations = async() =>{
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

export const getTutorials = async() =>{
    const url = 'get-tutorials';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Tutorial[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}


export const getAdmins = async() =>{
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


export const postData = async(formData:MyFormData) =>{
  const url = 'create-company';

  const response = await fetch(baseUrl+url, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(formData),
  });    
  if (response.ok) {
      const data: any[] | undefined = await response.json();
          return data;
    } else {
      console.error('Failed to post data:', response.status, response.statusText);
    }

  console.log(formData);
}