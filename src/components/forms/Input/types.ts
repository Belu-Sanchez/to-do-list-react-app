type Props = {
    type: "text" | "password" | "email" | "checkbox" | "radio" | "file",
    name: string,
    placeholder: string,
    id: string,
    label: string,
    controlId: string
}

export default Props;