import { FC, useState } from "react"
import { defaultValues, FormsFields } from "./defaultValues"
import './styles.scss';
import { CgColorPicker } from 'react-icons/cg';


type Props = {
    onSearch: (params: FormsFields) => void
}

const FormFilterCategories: FC<Props> = ({ onSearch }) => {

    const [fields, setFileds] = useState(defaultValues)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSearch(fields)
    }

    return (

        <form action="mb-5" onSubmit={handleSubmit} className="form-filter-categories">
                         <h3>Filter</h3>

                <div >

                    <label htmlFor="">Category</label>
                    <input
                        type="text"
                        name="text"
                        className="input-name"
                        value={fields.text}
                        onChange={e => setFileds(prevState => ({ ...prevState, text: e.target.value }))}
                    />
                </div>
                <div>
                    <h2> <CgColorPicker /> </h2>
                    {/* <label htmlFor="">Color</label> */}
                    <input
                        type="color"
                        name="color"
                        className="input-color"
                        value={fields.color}
                        onChange={e => setFileds(prevState => ({ ...prevState, color: e.target.value }))}
                    />
                </div>

    
          <button className="button-search" type="submit">Search</button>

        </form>

        //         <form action="" className="form-filter-categories">

        //     <div>
        //       <div>
        //         <label>Category</label>
        //         <input
        //           type="text"
        //           name="text"
        //           id="text"
        //           className="input-name"
        //           value={search}
        //           onChange={(e) => setSearch(e.target.value)}
        //         />

        //       </div>


        //       <div>
        //         <h3> <CgColorPicker /> </h3>
        //         <input className="input-color"
        //           type="color"
        //           name="text"
        //           id="text"

        //           value={searchColor}
        //           onChange={(e) => setSearchColor(e.target.value)}
        //         />
        //       </div>
        //     </div>

        //     <button className="button-search">Search</button>
        //   </form> 

    )

}

export { FormFilterCategories }