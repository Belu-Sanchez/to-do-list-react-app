import { DB_BASE_URL } from "../constants";
import { mapToArray } from "../helpers/mapToArray";
import { Task } from "../types";

const getAll = async (search?:string): Promise<Task[]> => {
    const response = await fetch(`${DB_BASE_URL}/users.json`);
    const data = await response.json();
    const users =  mapToArray<Task>(data);

  return search
    ? users.filter((elem) => elem.title.includes(search))
    : users;
  }

type Payload = Omit<Task, "id">;

const add = async (task: Payload) => {
        const options = {
        method: "POST",
        body: JSON.stringify(task)
    }
    const response = await fetch(`${DB_BASE_URL}/tasks.json`, options);
    const data = await response.json();
        
    if (data.title) {
        return true;
      } else {
        return false;
      }


}


// **
// *
// *
// **

const get = async (id: string): Promise<Task> => {
    const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`);
    const data = await response.json();
    return {id, ...data}
  }

const update = async ({id, title, category, date, description, status }: Task) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({title, category, date, description, status })
    }


    const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);
    const data = await response.json();
    
    if (data.title) {
        return true;
      } else {
        return false;
      }
}


const remove = async (id: string ) => {
    const options = {
        method: "DELETE",
      } 
  
      await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);   
}

export const usersTasks = { getAll, get, add, update, remove}