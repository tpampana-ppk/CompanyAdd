import { Button } from "@mui/material"
import MyForm from "./MyForm"
import {useState} from 'react'
import {ChangeEvent} from 'react'

export interface dataType{
  name:string,
  sname:string
}
function Parent({add}:{add:boolean}) {
  const [addSelect,setAddSelect]=useState<boolean>(false);
  setAddSelect(add);
  const [data,setData]=useState<dataType>({
    name:'',
    sname:''
  })

  
  const handleSubmit = () =>{
    setAddSelect(false)
    console.log(data)
  }
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  return (
    <div>

      {
        addSelect && <MyForm onSubmit={handleSubmit} onInputChange={handleInputChange} data={data}/>
      }
  
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  )
}

export default Parent
