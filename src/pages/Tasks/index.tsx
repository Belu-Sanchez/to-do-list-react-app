import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { Layout } from '../../components/layout';


const Task = () => {
    return (
        <> 
        <Layout title='Task' className='Hola' >
        <Container> 
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Edite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>22/12/2022</td>
          <td>shop</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </Layout>
        </>
    );
};

export { Task }