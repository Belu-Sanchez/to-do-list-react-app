import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Layout } from "../../components/layout";
import { Main } from "../../components/layout/Main";
import { Button, Input } from "../../components/forms"
import './style.scss'
import { useState } from "react";
import { addCategory } from "../../services/categories"


const Category = () => {

    const [catName, setCatName] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addCategory({name: catName})

    }

    return (
        <> 
        <Layout title="Category" className="container-category">
        <Container className="container-category"> 
        <h3>Category</h3>
        <div> 
            <form onSubmit={handleSubmit}> 
        {/* <Form.Control type="#" onSubmit={handleSubmit}/> */}
        {/* <label onSubmit={handleSubmit}></label> */}
        <input value={catName} onChange={e => setCatName(e.target.value)}/>
        <Button text="Send" className="btn-category" type="submit" />
        {/* <button>Send</button> */}
        </form>
        </div>
        </Container>
        </Layout>
        </>
    );
};

export { Category }