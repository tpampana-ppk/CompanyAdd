import axios from "axios";
import { MyFormData } from "../types/formTypes";
import { Admin, Simulation, Tutorial } from "../types/types";
const authToken=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6ImI0ZjkwYmRkLTNlMTctNGRjNS1hYjhkLTdmZDY0Y2U5Yjg0ZSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDMxMzk3MDIsImV4cCI6MTcwMzE0OTcwMn0.2mycmTdIHId_ul4yeEvKh8DTP3fkf1ag7UIQveD-s2k`
export const getSimulations = async() =>{
    const url = 'https://dev-admin.sunrises.io/api/get-all-simulations';
    // const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6IjJjMGI5MmY3LTMzNTEtNDVjYS1hODkyLWJmZjg3ZmFkNjQ1MCIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDI5ODI4MDIsImV4cCI6MTcwMjk5MjgwMn0.xEN2eem4lmevTA0R5hKUN_TySDpf81d2cSob_ng6VDo`

    const response = await axios.get(url, {
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
    const url = 'https://dev-admin.sunrises.io/api/get-tutorials';
    // const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6IjJjMGI5MmY3LTMzNTEtNDVjYS1hODkyLWJmZjg3ZmFkNjQ1MCIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDI5ODI4MDIsImV4cCI6MTcwMjk5MjgwMn0.xEN2eem4lmevTA0R5hKUN_TySDpf81d2cSob_ng6VDo`

    const response = await axios.get(url, {
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
    const url = 'https://dev-admin.sunrises.io/api/get-users?_id=123&params=companyadmin';
    // const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6IjJjMGI5MmY3LTMzNTEtNDVjYS1hODkyLWJmZjg3ZmFkNjQ1MCIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDI5ODI4MDIsImV4cCI6MTcwMjk5MjgwMn0.xEN2eem4lmevTA0R5hKUN_TySDpf81d2cSob_ng6VDo`

    const response = await axios.get(url, {
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
  const url = 'https://dev-admin.sunrises.io/api/create-company';
  const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ2YjQzYzFjNmI2ZjM5M2E4OGY1YzI0IiwidXVpZCI6IjJjMGI5MmY3LTMzNTEtNDVjYS1hODkyLWJmZjg3ZmFkNjQ1MCIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJpYXQiOjE3MDI5ODI4MDIsImV4cCI6MTcwMjk5MjgwMn0.xEN2eem4lmevTA0R5hKUN_TySDpf81d2cSob_ng6VDo`

  const response = await fetch(url, {
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