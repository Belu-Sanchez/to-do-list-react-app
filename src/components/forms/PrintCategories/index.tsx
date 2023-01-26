import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { categoriesServices } from "../../../services/categories";
import { Category } from "../../../types";
import { Spinner } from "../../commons";
import { Button } from "../Button";
import { FilterFileds } from "./types";
import { FormFilterCategories } from "../FormFilterCategories";

type Props = {
  categories: Category[];
}


const PrintCategories:FC<Props> = ({categories}) => {

  const navigate = useNavigate();

  const removeCategory = async (id: string) => {
    await categoriesServices.remove(id);

  }

 


  return (
    <>
    {!categories.length && <Spinner />}
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
                    <td style={{ background: `${elem.color}` }}>{elem.color}</td>
                    <td className="d-flex justify-content-center">
                      <Button
                        type="button"
                        variant="outline-danger btn-tabla m-3"
                        icon="trash"
                        handleClick={() => removeCategory(elem.id)}
                      />

                      <Button
                        type="button"
                        variant="outline-secondary btn-tabla m-3"
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