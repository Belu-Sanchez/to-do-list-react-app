import { CardAdd, NoContent, PrintCategories } from "../../components/forms"
import { useState } from "react";
import { categoriesServices } from "../../services/categories";
import { Category } from "../../types";




const Categories = () => {


    const [categories, setCategories] = useState<Category[]>([]);
  
    const getCategories = async () => {
      const response = await categoriesServices.getAll();
      setCategories(response)
  
    }
  
    getCategories();
  
    return (
      <>
        <CardAdd variant='category' text='categories' classNameChildren='tabla'>
          {categories.length >= 1 && <PrintCategories />}
          {categories.length === 0 && <NoContent text='categories' />}
        </CardAdd>
      </>
    );

  
};

export { Categories }