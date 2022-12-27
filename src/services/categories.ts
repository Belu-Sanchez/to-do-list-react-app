import { DB_BASE_URL } from '../constants';
import { mapToArray } from '../helpers/mapToArray';
import { Category } from '../types';

const getAll = async (): Promise<Category[]> => {
    const response = await fetch(`${DB_BASE_URL}/categories.json`);
    const data = await response.json();
    return mapToArray<Category>(data);
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



const get = async (id: string): Promise<Category> => {
  const response = await fetch(`${DB_BASE_URL}/categories/${id}.json`);
  const data = await response.json();
  return {id, ...data}
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

const remove = async (id: string ) => {
    const options = {
      method: "DELETE",
    } 

    await fetch(`${DB_BASE_URL}/categories/${id}.json`, options);   
}

export const categoriesServices = { getAll, get, add, update, remove}