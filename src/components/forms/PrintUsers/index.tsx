import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersService } from '../../../services/users';
import { User } from '../../../types';
import { Button } from '../Button';



const PrintUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
   
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const fetchData = () => usersService.getAll(search).then((data) => setUsers(data));

 useEffect(() => {
fetchData();
 }, [search]);

const removeUsers = async (id: string) => {
    await usersService.remove(id);
    fetchData();
  }



    return (
        <>
      <div> 
      <form action="">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </form>
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
                    <td>{elem.birthdate}</td>
                    <td>{elem.email}</td>
                    <td>{elem.password}</td>
                    <td>
                      <Button
                        type="button"
                        variant="outline-danger btn-tabla"
                        icon="trash"
                        handleClick={() => removeUsers(elem.id)}
                      />
                    
                      <Button
                      type="button"
                    variant="outline-secondary btn-tabla"
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