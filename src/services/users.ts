import { DB_BASE_URL } from "../constants";
import { mapToArray } from "../helpers/mapToArray";
import { User } from "../types";

const getAll = async (search?:string): Promise<User[]> => {
    const response = await fetch(`${DB_BASE_URL}/users.json`);
    const data = await response.json();
    const users =  mapToArray<User>(data);

  return search
    ? users.filter((elem) => elem.name.includes(search))
    : users;
  }

type Payload = Omit<User, "id">;

const add = async (user: Payload) => {
        const options = {
        method: "POST",
        body: JSON.stringify(user)
    }
    const response = await fetch(`${DB_BASE_URL}/users.json`, options);
    const data = await response.json();
        
    if (data.name) {
        return true;
      } else {
        return false;
      }


}


// **
// *
// *
// **

const get = async (id: string): Promise<User> => {
    const response = await fetch(`${DB_BASE_URL}/users/${id}.json`);
    const data = await response.json();
    return {id, ...data}
  }

const update = async ({id, name, lastname, email, password, birthdate}: User) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({name, lastname, email, password, birthdate})
    }


    const response = await fetch(`${DB_BASE_URL}/users/${id}.json`, options);
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
  
      await fetch(`${DB_BASE_URL}/users/${id}.json`, options);   
}

export const usersService = { getAll, get, add, update, remove}