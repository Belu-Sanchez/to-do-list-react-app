import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Main } from "../../components/layout";
import { Button, Input } from "../../components/forms"

import { useState } from "react";
// import { addCategory } from "../../services/categories"
import { NavLink } from "react-router-dom";
import './style.scss'



const Categories = () => {

    return (
        <>
            <Container className="container-category">

                <h2>Add Category</h2>
                <div className="btn-save">
                    <NavLink to="save">Add</NavLink>
                </div>
                {/* <Button text="Add" className="category" type="button"/> */}

            </Container>
            <Container className="container-category">
                <h2>At the moment there are no categories</h2>
            </Container>
        </>
    );
};

export { Categories }