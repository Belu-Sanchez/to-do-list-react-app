import { CardAdd, NoContent } from '../../components/forms';
import { useState } from 'react';
import { tasksService } from '../../services/tasks';
import { Task } from '../../types';



const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    // const getTasks = async () => {
    //     const response = await tasksService.getAll();
    //     setTasks(response)

    // }

    // getTasks();
    return (
        <>

            <CardAdd  text='tasks' classNameChildren='tabla' modoDark='dark'>
                {/* {tasks.length >= 1 && <PrintUsers />} */}
                {tasks.length !== 0 && <NoContent text='tasks' variant='no-tasks' />}
            </CardAdd>
        </>
    );
};

export { Tasks }


