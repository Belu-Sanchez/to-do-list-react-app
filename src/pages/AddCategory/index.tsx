import { useState } from "react";
import { FormAdd, FormAddCategory } from "../../components/forms";
import { categoriesServices } from "../../services/categories";

const AddCategory = () => {

    return (
        <> 
            <FormAddCategory />
        </>
    );
};

export { AddCategory }