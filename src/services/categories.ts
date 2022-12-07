import { Category } from '../types';

const getCategories = () => {

}

export const addCategory = (playload: any) => {
    const options = {
        method: "POST",
        body: JSON.stringify(playload)
    }
    fetch("https://todolist-8ba8a-default-rtdb.firebaseio.com/categories.json", options)
}

const getCategory = (id: string) => {

}

const updateCategories = (id:string, playload: any) => {

}

const removeCategory = (id: string ) => {

}