import { DB_BASE_URL } from "../constants";
import { mapToArray } from "../helpers/mapToArray";
import { Categories, Tasks } from "../pages";
import { Task } from "../types";


// type Payload = Omit<Task, "id">;
type Payload = Partial<Task>;


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


export const tasksService = { add }