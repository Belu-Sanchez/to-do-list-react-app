import './style.scss'
import { FC, ReactNode, useState } from "react";
import { usersService } from '../../../services/users';


const FormUser = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await usersService.add({email, birthdate, lastname, name, password });
    
    
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
                <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}/>

                <label htmlFor="">Email</label>
                <input  type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="">Password</label>
                <input  type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Sumbit</button>
            </form>

        </>
    );
};

export { FormUser }
