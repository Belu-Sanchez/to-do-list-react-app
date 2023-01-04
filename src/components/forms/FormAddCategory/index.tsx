import { Container, FormLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './style.scss'
import { useState } from "react";
import { Button, Input, ToastAdd } from '../index'
import { categoriesServices } from '../../../services/categories'
import { useNavigate, useParams } from "react-router-dom";



const FormAddCategory = () => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [ifError, setIfError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const getCategoryEdit = async () => {
        if (id) {
            const response = await categoriesServices.get(id)
            setName(response.name)
            setColor(response.color)
        }
    }

    if (id && name === "" && color === "") getCategoryEdit();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIfError(false);

        let rta;
        if (id) {
            rta = await categoriesServices.update({ id, name, color });
        } else {
            rta = await categoriesServices.add({ color, name });
        }
        
        if (rta) {
            navigate('/categories')
        } else {
            setIfError(true);
        }
    
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="container-add-category">
                <h2>Add Category</h2>
                <div className="form-name">
                    <label htmlFor="name-control">Name</label>
                    <input type="text" name="name" value={name} id="name-control" onChange={e => setName(e.target.value)} required/>
                </div>
                <div className="form-color">
                    <label htmlFor="color-control" >Color</label>
                    <input type="color" name="color" value={color} id="color-control" onChange={e => setColor(e.target.value)} />
                </div>
                <button className="btn-add" type="submit">Submit</button>
                {ifError && <ToastAdd />}
            </form>
        </>
    );
};

export { FormAddCategory }