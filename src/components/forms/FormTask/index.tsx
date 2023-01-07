import './style.scss'
import { FC, ReactNode, useEffect, useState } from "react";
import { usersService } from '../../../services/users';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastAdd } from '../ToastAdd';
import { tasksService } from '../../../services/tasks';
import { Category } from '../../../types';
import { categoriesServices } from '../../../services/categories';


const FormTask = () => {

    const [title, setTitle] = useState("");
    const [dateTask, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");


    

    //lo uso para pintar el select de categorias
    const [categoryObj, setCategory] = useState<Category[]>([]);

    // este deberia tomar el valor de la categoria seleccionada y guardarlo en la base de datos
    const [categoryTask, setCategoryTask] = useState("");

    useEffect(() => {
        const printCategories = async () => {
            const response = await categoriesServices.getAll()

            setCategory(response)

        }

        printCategories()

    }, [])







    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const date = new Date(dateTask)


        //llega un objeto con la categoria. {id: 'compras'}
        const category = await categoriesServices.get(categoryTask)


    // setCategoryTask(category)
     

console.log(categoryTask)

        // setIfError(false);
        await tasksService.add({ title, date, description, status, category});

        // let rta;
        //     if (id) {
        //         rta = await usersService.update({ id, name, lastname, email, password, birthdate });
        //     } else {
        //         rta = await usersService.add({ name, lastname, email, password, birthdate });
        //     }

        //     if (rta) {
        //         navigate('/users')
        //     } else {
        //         setIfError(true);
        //     }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container-add-task">
                <h2>Add Task</h2>

                <label htmlFor="name-control">Title</label>
                <input type="text" name="title" value={title} id="title-control" onChange={e => setTitle(e.target.value)} />

                <label htmlFor="name-control">Date</label>
                <input type="date" name="date" id="date-control" value={dateTask} onChange={e => setDate(e.target.value)} />

                <div>
                    <label>Category</label>
                    <select className="form-control select-category" id="exampleFormControlSelect1" onChange={e => setCategoryTask(e.target.value)}>{
                        categoryObj.map((elem) => {
                            return (<option selected value={elem.id}>{elem.name}</option >
                            )
                        })

                    }
                    </select>
                </div>

                <div>
                    <label>Status</label>
                    <select className="form-control select-category" >
                        <option selected value="to-do">To-Do</option>
                    </select>
                </div>

                <div>
                    <label>Description</label>
                    <textarea className="form-control select-category" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit">Sumbit</button>


            </form>

        </>
    );
};

export { FormTask }
