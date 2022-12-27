// import './style.scss'
import { FC, ReactNode, useState } from "react";
// import { Button, Input } from '../index'

type Props = {
    children?: ReactNode;
    variant: string;
    btnVariant: string;
    icon?: string;
    handleClick: () => void;
    handleSubmit: () => void;
    value: string;
};


const FormAdd: FC<Props> = ({ children, variant, btnVariant, icon, handleClick, handleSubmit, value  }) => {

    // const [catName, setCatName] = useState("");

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     addCategory({ name: catName })

    // }

    return (
        <>

            <form onSubmit={handleSubmit} className={`container-add-${variant}`} >
                <label>Add Category</label>
                <input value={value} onChange={handleSubmit} />

                <button className={`btn btn-${btnVariant}`} onClick={handleClick}>
                    {children}
                    {icon && <i className={`bi bi-${icon} ${children ? "ms-2" : ""}`}></i>}
                </button>
            </form>

        </>
    );
};

export { FormAdd }
