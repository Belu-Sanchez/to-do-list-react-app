import { FC } from "react";
import Props from "./types"

const Button: FC<Props> = ({className, text, type }) => {
    return (
        <button className={`button-${className}`} type={type}>{text}</button>
    );
}
export { Button }

