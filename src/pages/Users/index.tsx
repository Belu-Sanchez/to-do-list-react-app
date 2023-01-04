import { CardAdd, NoContent, PrintUsers } from '../../components/forms';
import { useState } from 'react';
import { User } from '../../types';
import { usersService } from '../../services/users';


const Users = () => {

  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const response = await usersService.getAll();
    setUsers(response)

  }

  getUsers();

  return (
    <>
      <CardAdd variant='users' text='users' classNameChildren='tabla'>
        {users.length >= 1 && <PrintUsers />}
        {users.length === 0 && <NoContent text='users' variant='no-users' />}
      </CardAdd>
    </>
  );
};

export { Users }