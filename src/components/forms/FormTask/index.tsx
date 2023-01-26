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
    const [idCategory, setIdCategory] = useState("");
    const [statusEdit, setStatusEdit] = useState("");

    // const [idTask, setIdTask] = useState("");

    //lo uso para pintar el select de categorias
    const [categoryObj, setCategory] = useState<Category[]>([]);

    // este deberia tomar el valor de la categoria seleccionada y guardarlo en la base de datos
    // const [categoryTask, setCategoryTask] = useState("");
    const [ifError, setIfError] = useState(false);


    const navigate = useNavigate();


    useEffect(() => {
        categoriesServices.getAll({text: "", color: ""}).then(data => setCategory(data))
    }, [])

    const { id } = useParams();


    useEffect(() => {
        if (id) {
            tasksService.get(id).then(data => {
                setIdCategory(data.category.id)
                setStatusEdit(data.status)
    
                 console.log(new Date(data.date).toString()) //27/1/2023
                // console.log(data.date) //2023-01-28T00:00:00.000Z
                setTitle(data.title)
            //  setDate((data.date).toString())
                setDescription(data.description)
            })

        }


    },[])



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIfError(false);
        const date = new Date(dateTask)
        const category = categoryObj.find((elem) => elem.id === idCategory)
console.log(idCategory)
console.log(category)
console.log(id)

        if (category) {
            if (id) {
                await tasksService.update({ category, date, description, id, status, title })
                navigate('/tasks')
            }else{
                   await tasksService.add({ title, date, description, status, category });
            navigate('/tasks')
            }
         
        }else{
           setIfError(true);

        }
      

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
                    <select className="form-control select-category" id="exampleFormControlSelect1" onChange={e => setIdCategory(e.target.value)}>
                        <option selected disabled>Select an option</option>{
                            categoryObj.map((elem) => {
                                return (<option value={elem.id} selected={elem.id === idCategory}>{elem.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <label>Status</label>
                    <select className="form-control select-category" onChange={e => setStatus(e.target.value)}>
                        <option selected disabled>Select an option</option>
                        <option id="to-do" value="To-Do" selected={"To-Do" === statusEdit}>To Do</option>
                        <option id="in-progress" value="Work in progress" selected={"wWrk in progress" === statusEdit}>Work in progress</option>
                        <option id="done" value="Done" selected={"Done" === statusEdit}>Done</option>
                    </select>
                </div>

                <div>
                    <label>Description</label>
                    <textarea className="form-control select-category" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit">Sumbit</button>

                {ifError && <ToastAdd />}
            </form>

        </>
    );
};

export { FormTask }
