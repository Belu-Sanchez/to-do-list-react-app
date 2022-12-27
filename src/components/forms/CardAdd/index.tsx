import { FC } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

type Props = {
    variant: string;
    text: string;
}
const CardAdd: FC<Props> = ({ variant, text }) => {
    return (
        <>
            <Container className={`container-${variant}`}>
                <h2>Add {text}</h2>
                <div className="btn-save">
                    <NavLink to="save">Add</NavLink>
                </div>
            </Container>
        </>
    );
};

export { CardAdd }
