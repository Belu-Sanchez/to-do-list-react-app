import { CardAdd, FormFilterUsers, NoContent, PrintUsers } from '../../components/forms';
import { useEffect, useState } from 'react';
import { User } from '../../types';
import { usersService } from '../../services/users';
import { useSearchParams } from 'react-router-dom';
import { FilterFileds } from './types'


const Users = () => {

  const [users, setUsers] = useState<User[]>([]);


  const [searchParams, setSearchParams] = useSearchParams("");



  useEffect(() => {

    const criteria = { 
      text: searchParams.get('name'),
      lastname: searchParams.get('lastname')
    }

    usersService.getAll(criteria).then(data => setUsers(data));
  }, [searchParams])

  const setSearchQuery = (params: FilterFileds) => {

    setSearchParams(params)

  }

  return (
    <>
      <CardAdd text='users' classNameChildren='tabla'>
      <FormFilterUsers onSearch={setSearchQuery}/>

        {users.length >= 1 && <PrintUsers users={users}/>}
        {users.length === 0 && <NoContent text='users' variant='no-users' />}
      </CardAdd>
    </>
  );
};

export { Users }