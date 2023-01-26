import { FC, useEffect, useState } from 'react';
import { Task } from '../../../types';
import { useNavigate } from "react-router-dom";
import './style.scss'
import { tasksService } from '../../../services/tasks';
import { Button } from '../Button';
import { Spinner } from '../../commons';
import { Col, Row, Stack } from 'react-bootstrap';

type Props = {
  tasks: Task[];
}

const PrintTasks: FC<Props> = ({tasks}) => {

  const navigate = useNavigate();

  const removeTask = async (id: string) => {
    await tasksService.remove(id);

  }

 if (!tasks.length) return <Spinner />
    


  return (
    <>
  
      <div>
        <div className='container-task'>
       
            {tasks.map((elem) => {
              console.log(elem)
              return (
               

             
               <div className='card-task' key={elem.id}>
                  <div style={{ background: `${elem.category.color}` }}>
                    <h5>{elem.category.name}</h5>
                  </div>
                  <div className='card-task-description' >
                    <h3>{elem.title}</h3>
                    <p> Date: {new Date(elem.date).getDate() + 1}/{new Date(elem.date).getMonth() + 1}/{new Date(elem.date).getFullYear()}</p>
                    <p>Status: {elem.status}</p>
                    <p>Descripion: {elem.description}</p>
                  </div>
                  <div className="d-flex flex-row-reverse">
                     <Button
                    type="button"
                    variant="outline-danger btn-tabla m-2"
                    icon="trash"
                    handleClick={() => removeTask(elem.id)}
                  />

                  <Button
                    type="button"
                    variant="outline-secondary btn-tabla m-2"
                    icon="pencil"
                    handleClick={() => navigate(`/tasks/save/${elem.id}`)}
                  />
                    </div>
                 

                </div>
              )
            })}


     
        </div>


      </div>

    </>
  );
};

export { PrintTasks }