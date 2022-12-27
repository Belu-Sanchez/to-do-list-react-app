import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Main } from '../../components/layout';
import './style.scss';
import { NavLink } from 'react-router-dom';


const Task = () => {
    return (
        <> 
        {/* <Main className='container-tasks' >
      
          <h2>At the moment there are no tasks</h2>
    
    </Main> */}


    <Container className="container-task">

<h2>Add Task</h2>
<div className="btn-save">
    <NavLink to="save">Add</NavLink>
</div>
{/* <Button text="Add" className="category" type="button"/> */}

</Container>
<Container className="container-task">
<h2>At the moment there are no tasks</h2>
</Container>
        </>
    );
};

export { Task }