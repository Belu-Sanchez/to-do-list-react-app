import { FC, useState } from "react"
import { defaultValues, FormsFields } from "./defaultValues"
import './styles.scss';
import { CgColorPicker } from 'react-icons/cg';


type Props = {
    onSearch: (params: FormsFields) => void
}

const FormFilterUsers: FC<Props> = ({ onSearch }) => {

    const [fields, setFileds] = useState(defaultValues)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSearch(fields)
    }

    return (

        <form action="mb-5" onSubmit={handleSubmit} className="form-filter-categories">
                         <h3>Filter</h3>

                <div >

                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name="text"
                        className="input-user"
                        value={fields.name}
                        onChange={e => setFileds(prevState => ({ ...prevState, name: e.target.value }))}
                    />
                </div>
                <div>
                  
                    <label htmlFor="">Lastname</label>
                    <input
                        type="text"
                        name="color"
                        className="input-user"
                        value={fields.lastname}
                        onChange={e => setFileds(prevState => ({ ...prevState, lastname: e.target.value }))}
                    />
                </div>

    
          <button className="button-search" type="submit">Search</button>

        </form>

   

    )

}

export { FormFilterUsers}