import { DB_BASE_URL } from "../constants";
import { mapToArray } from "../helpers/mapToArray";
import { Categories, Tasks } from "../pages";
import { Task } from "../types";


type Payload = Omit<Task, "id">;
// type Payload = Partial<Task>;


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







type GetAllPayload = {
  status?: string | null, 
}



const getAll = async ({ status}: GetAllPayload): Promise<Task[]> => {
  const response = await fetch(`${DB_BASE_URL}/tasks.json`);
  const data = await response.json();

  const arrayData = mapToArray<Task>(data);
  return arrayData
  .filter(task => status ? task.status.includes(status) : true)
};

const remove = async (id: string ) => {
  const options = {
    method: "DELETE",
  } 

  await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);   
}






const update = async ({category, date, description, status, title, id}: Task) => {
  const options = {
      method: "PUT",
      body: JSON.stringify({category, date, description, status, title})
  }


  const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);
  const data = await response.json();
  
  if (data.title) {
      return true;
    } else {
      return false;
    }
}


const get = async (id: string): Promise<Task> => {
  const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`);
  const data = await response.json();
  return data
}




export const tasksService = { add, getAll, remove, update, get }