// import { Button } from "@mui/material"
// import {useState} from 'react';
// import AddComponent from "./formik/Add";
// import EditComponent from "./formik/Edit";
// const App = () => {
//   const [addSelect,setAddSelect]=useState<boolean>(true);
//   const [editSelect,setEditSelect]=useState<boolean>(false);

import CheckboxesTags from "./company add form/Company_add_form"

//   return (
//     <>
//       <Button onClick={()=>{setAddSelect(true),setEditSelect(false)}}>Add</Button>
//       <Button onClick={()=>{setAddSelect(false),setEditSelect(true)}}>Edit</Button>
//       {
//         addSelect && <AddComponent />
//       }
//       {
//         editSelect && <EditComponent />
//       }
//     </>
//   )
// }

// export default App





const App = () => {
  return (
    <div>
      <CheckboxesTags />
    </div>
  )
}

export default App
