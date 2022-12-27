import './style.scss';
import { CardAdd, NoContent } from '../../components/forms';


const Users = () => {
    return (
        <>
        <CardAdd variant='users'text='users'/>
            <NoContent text='users' variant='users' />
        </>
    );
};

export { Users }