import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersService } from '../../../services/users';
import { User } from '../../../types';
import { Spinner } from '../../commons';
import { Button } from '../Button';

type Props = {
  users: User[];
}


const PrintUsers:FC<Props> = ({users}) => {


  const navigate = useNavigate();

  const removeUsers = async (id: string) => {
    await usersService.remove(id);
  }

  if (!users.length) return <Spinner />

  return (
    <>
      <div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="table-light">
                <th>Name</th>
                <th>Lastname</th>
                <th>Birthdate</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.name}</td>
                    <td>{elem.lastname}</td>
                    <td> {new Date(elem.birthdate).getDate() + 1}/{new Date(elem.birthdate).getMonth() + 1}/{new Date(elem.birthdate).getFullYear()}</td>
                    <td>{elem.email}</td>
                    <td>{elem.password}</td>
                    <td>
                      <Button
                        type="button"
                        variant="outline-danger btn-tabla m-2"
                        icon="trash"
                        handleClick={() => removeUsers(elem.id)}
                      />

                      <Button
                        type="button"
                        variant="outline-secondary btn-tabla m-2"
                        icon="pencil"
                        handleClick={() => navigate(`/users/save/${elem.id}`)}
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

export { PrintUsers }