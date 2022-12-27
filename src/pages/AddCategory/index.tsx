import { useState } from "react";
import { FormAdd, FormAddCategory } from "../../components/forms";
import { categoriesServices } from "../../services/categories";

const AddCategory = () => {
//   const [catName, setCatName] = useState("");

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         addCategory({ name: catName })

//     }

    
    return (
        <> 
            <FormAddCategory />
           {/* <FormAdd handleClick={() => borrarCategoria(elem.id)} variant="category" btnVariant="button" value="CatName" handleSubmit={e => setCatName(e.target.value)}>submit</FormAdd> */}
        </>
    );
};

export { AddCategory }