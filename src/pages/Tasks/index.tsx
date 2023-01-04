import { CardAdd, NoContent } from '../../components/forms';
import { useState } from 'react';
import { usersTasks } from '../../services/tasks';
import { Task } from '../../types';



const Tasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async () => {
        const response = await usersTasks.getAll();
        setTasks(response)

    }

    getTasks();
    return (
        <>

            <CardAdd variant='tasks' text='tasks' classNameChildren='tabla'>
                {/* {tasks.length >= 1 && <PrintUsers />} */}
                {tasks.length === 0 && <NoContent text='tasks' variant='no-tasks' />}
            </CardAdd>
        </>
    );
};

export { Tasks }


