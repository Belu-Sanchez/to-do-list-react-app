import { DB_BASE_URL } from '../constants';
import { Category } from '../types';

const getAll = () => {

}

type Payload = Omit<Category, "id">;

const add = async (category: Payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(category)
    }
    const response = await fetch(`${DB_BASE_URL}/categories.json`, options);
    const data = await response.json();
    
    if (data.name) {
        return true;
      } else {
        return false;
      }

}



const get = (id: string) => {

}

const update = async ({name, color, id}: Category) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({name, color})
    }


    const response = await fetch(`${DB_BASE_URL}/categories/${id}.json`, options);
    const data = await response.json();
    
    if (data.name) {
        return true;
      } else {
        return false;
      }
}

const remove = (id: string ) => {

}

export const categoriesServices = { getAll, get, add, update, remove}