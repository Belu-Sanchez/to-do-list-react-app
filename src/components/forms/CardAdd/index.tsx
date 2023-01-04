import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './style.scss';

type Props = {
    variant: string;
    text: string;
    children?: ReactNode;
    classNameChildren?: string;
}
const CardAdd: FC<Props> = ({ variant, text, children, classNameChildren }) => {
    return (
        <>
            <div className={`container-card-add container-${variant}`}>
                <div className="row">
                    <div className="col">
                        <h2 className="">Add {text}</h2>
                    </div>
                    <div className="col col-lg-2 btn-save">
                        <NavLink to="save">Add</NavLink>
                    </div>
                </div>

                <div className={`row mt-5 ${classNameChildren}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export { CardAdd }
