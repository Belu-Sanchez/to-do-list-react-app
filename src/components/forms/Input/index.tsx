import { FC } from "react";
import Form from 'react-bootstrap/Form';
import Props from "./types";

const Input: FC<Props> = ({type, placeholder,id, name, label, controlId}) => {
    return(
        <>
        <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label htmlFor={id}>{label}</Form.Label>
        <Form.Control type={type} name={name} placeholder={placeholder} />
        </Form.Group>
        </>
    )
}

export { Input };