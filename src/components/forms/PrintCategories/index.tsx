import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesServices } from "../../../services/categories";
import { Category } from "../../../types";
import { Button } from "../Button";





const PrintCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const fetchData = () => categoriesServices.getAll(search).then((data) => setCategories(data));

  useEffect(() => {
    fetchData();
  }, [search]);
  
  const removeCategory = async (id: string) => {
    await categoriesServices.remove(id);
    fetchData();

  }
  
  return (
    <>
    <form action="">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search categories"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        </form>
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

export { PrintCategories }