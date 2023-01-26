import { CardAdd, FormFilterTasks, NoContent, PrintTasks } from '../../components/forms';
import { useEffect, useState } from 'react';
import { tasksService } from '../../services/tasks';
import { Task } from '../../types';
import { useSearchParams } from 'react-router-dom';
import { FilterFileds } from './types'
 

const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchParams, setSearchParams] = useSearchParams("");





    useEffect(() => {
  const criteria = { 
        status: searchParams.get('status'),
      }

     tasksService.getAll(criteria).then(response =>  setTasks(response));
       
    }, [searchParams])
  

  
    const setSearchQuery = (params: FilterFileds) => {
  
      setSearchParams(params)
  
    }











    return (
        <>
            <CardAdd  text='tasks' classNameChildren='tabla' modoDark=''>
                 {/* <FormFilterTasks  onChange={setSearchQuery }/> */}

                {tasks.length >= 1 && <PrintTasks tasks={tasks} />}
                {tasks.length === 0 && <NoContent text='tasks' variant='no-tasks' />}
            </CardAdd>

            
        </>
    );
};

export { Tasks }


