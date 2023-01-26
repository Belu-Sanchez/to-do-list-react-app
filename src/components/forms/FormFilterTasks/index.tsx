import { FC, useState } from "react"
import { defaultValues, FormsFields } from "./defaultValues"
import './styles.scss';
import Dropdown from 'react-bootstrap/Dropdown';


type Props = {
    onChange: (params: FormsFields) => void
}

const FormFilterTasks: FC<Props> = ({ onChange }) => {

  const [status, setStatus] = useState('');

    const [fields, setFileds] = useState(defaultValues)

    const handleChange = (e: any) => {
        e.preventDefault()
        // onChange(status)
    }

    return (

  
       <Dropdown>
       <Dropdown.Toggle className='btn-status' id="dropdown-basic" onChange={handleChange}>
         Status
       </Dropdown.Toggle>
{/* <divo nChange={(e) => setStatus(e.target.value)}></div> */}
       <Dropdown.Menu >

         <Dropdown.Item id="to-do" value="To-Do" selected={"To-Do" === status}>To Do</Dropdown.Item>
         <Dropdown.Item id="in-progress" value="Work in progress" selected={"wWrk in progress" === status}>Work in progresss</Dropdown.Item>
         <Dropdown.Item id="done" value="Done" selected={"Done" === status}>Donee</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
       

    )

}

export { FormFilterTasks }