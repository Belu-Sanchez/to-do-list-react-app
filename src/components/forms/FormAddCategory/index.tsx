import { Container, FormLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './style.scss'
import { useState } from "react";
import { Button, Input, ToastAdd } from '../index'
import { categoriesServices } from '../../../services/categories'


const FormAddCategory = () => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
       const rta = await categoriesServices.add({ name, color })

       if(rta){
       

        setName("");
        setColor("");
       }else{
       }

    }


    return (
        <>  
            <form onSubmit={handleSubmit} className="container-add-category">
                <h2>Add Category</h2>
                <div className="form-name">
                    <label htmlFor="name-control">Name</label>
                    <input type="text" name="name" value={name} id="name-control" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-color">
                    <label htmlFor="color-control">Color</label>
                    <input type="color" name="color" value={color} id="color-control" onChange={e => setColor(e.target.value)}/>
                </div>
                {/* <button className="btn-add" type="submit">Submit</button> */}
                <ToastAdd />
            </form>
        </>
    );
};

export { FormAddCategory }