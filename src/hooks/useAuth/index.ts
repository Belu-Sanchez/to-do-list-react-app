import { useState } from "react"
import { usersService } from "../../services/users"

const useAuth = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const login = async (email: string, pass: string) => {

        // const users = await usersService.getAll()

        // const user = users.find(elem => elem.email === email)

        // if(user && user.password === pass) {
        //     setIsUserLoggedIn(true)
        // } else {
        //     console.log("Datos incorrectos")
        // }

        // procesar el login de los usuarios con usuario y contraseña

    }

    const loginWithToken = () => {

        // para procesar el login de los usuarios que iniciaron sesión con anterioridad y
        // tenemos su token en localstorage

    }

    const logout = () => {

        // procesa el deslogueo de un usuario

    }

    const forgotPassword = () => {

        // función para recuperar la cuenta en caso de olvido de contraseña.

    }

    return { login, loginWithToken, logout, forgotPassword, isUserLoggedIn }

} 

export { useAuth }