import { FC } from "react";
import { Container } from "react-bootstrap";

type Props = {
    variant?: string;
    text: string;

}

const NoContent: FC<Props> = ({ variant, text }) => {
    return (
        <>
            <Container className={`container-${variant}`}>
                <h2>At the moment there are no {text}</h2>
            </Container>
        </>
    );
};

export { NoContent }