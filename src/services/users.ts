import { DB_BASE_URL } from "../constants";
import { mapToArray } from "../helpers/mapToArray";
import { User } from "../types";

const getAll = async (): Promise<User[]> => {
    const response = await fetch(`${DB_BASE_URL}/categories.json`);
    const data = await response.json();
    return mapToArray<User>(data);
}

type Payload = Omit<User, "id">;

const add = async (user: Payload) => {
        const options = {
        method: "POST",
        body: JSON.stringify(user)
    }
    const response = await fetch(`${DB_BASE_URL}/users.json`, options);
    const data = await response.json();
}


        
//     if (data.name) {
//         return true;
//       } else {
//         return false;
//       }





// **
// *
// *
// **

const get = (id: string) => {

}

const update = (id:string, playload: any) => {

}

const remove = (id: string ) => {

}

export const usersService = { getAll, get, add, update, remove}