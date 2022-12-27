import { Container } from "react-bootstrap";
import { Button } from "../../components/forms"
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './style.scss'
import { categoriesServices } from "../../services/categories";
import { Category } from "../../types";
import { Task } from "../Tasks";




const Categories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  const getCategories = async () => {
    const response = await categoriesServices.getAll();
    setCategories(response)

  }

  if (!categories.length) getCategories();

  const removeCategory = async (id: string) => {
    await categoriesServices.remove(id);
    getCategories();

  }

  return (
    <>
      <Container className="container-category">

        <h2>Add Category</h2>
        <div className="btn-save">
          <NavLink to="save">Add</NavLink>
        </div>
      </Container>
      <div className="container-table"> 
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="table-light">
                <th>Name</th>
                <th>Color</th>
                <th className="d-flex justify-content-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.name}</td>
                    <td style={{ background: `${elem.color}` }}></td>
                    <td className="d-flex justify-content-center">
                      <Button
                        type="button"
                        variant="outline-danger btn-tabla"
                        icon="trash"
                        handleClick={() => removeCategory(elem.id)}
                      />
                    
                      <Button
                      type="button"
                    variant="outline-secondary btn-tabla"
                    icon="pencil"
                    handleClick={() => navigate(`/categories/save/${elem.id}`)}
                  />
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div> 
        </div>
    </>
  );
};

export { Categories }