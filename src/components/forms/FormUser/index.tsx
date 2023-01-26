import './style.scss'
import { FC, ReactNode, useState } from "react";
import { usersService } from '../../../services/users';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastAdd } from '../ToastAdd';


const FormUser = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdateUser, setBirthdate] = useState("");

    const [ifError, setIfError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const getUserEdit = async () => {
        if (id) {
            const response = await usersService.get(id)
            setName(response.name)
            setLastname(response.lastname)
            setEmail(response.email)
            // setBirthdate(response.birthdate)
            setPassword(response.password)
        }
    }

    if (id && name === "" && lastname === "" && email === "" && password === "" && birthdateUser === "") getUserEdit();



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIfError(false);
        const birthdate = new Date(birthdateUser)
        let rta;
            if (id) {
                rta = await usersService.update({ id, name, lastname, email, password, birthdate });
            } else {
                rta = await usersService.add({ name, lastname, email, password, birthdate });
            }
            
            if (rta) {
                navigate('/users')
            } else {
                setIfError(true);
            }
    
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container-add-user">
            <h2>Add User</h2>

                <label htmlFor="name-control">Name</label>
                <input type="text" name="name" value={name} id="name-control" onChange={e => setName(e.target.value)} required />

                <label htmlFor="">Lastname</label>
                <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}/>

                <label htmlFor="">Birthdate</label>
                <input type="date" value={birthdateUser} onChange={e => setBirthdate(e.target.value)}/>

                <label htmlFor="">Email</label>
                <input  type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="">Password</label>
                <input  type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Sumbit</button>
                {ifError && <ToastAdd />}
            </form>

        </>
    );
};

export { FormUser }
