import { CardAdd, FormFilterCategories, NoContent, PrintCategories } from "../../components/forms"
import { useEffect, useState } from "react";
import { categoriesServices } from "../../services/categories";
import { Category } from "../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FilterFileds } from './types'
import { Spinner } from "../../components/commons";



const Categories = () => {


  const [categories, setCategories] = useState<Category[]>([]);


  const [searchParams, setSearchParams] = useSearchParams("");



  useEffect(() => {

    const criteria = { 
      text: searchParams.get('text'),
      color: searchParams.get('color')
    }

    categoriesServices.getAll(criteria).then(data => setCategories(data));
  }, [searchParams])

  const setSearchQuery = (params: FilterFileds) => {

    setSearchParams(params)

  }


  // if (!categories.length) return <Spinner />
  return (
    <>
      <CardAdd text='categories' classNameChildren='tabla'>
      <FormFilterCategories onSearch={setSearchQuery}/>
        {categories.length >= 1 && <PrintCategories categories={categories} />}
        {categories.length === 0 && <NoContent text='categories' />}
      </CardAdd>
    </>
  );


};

export { Categories }