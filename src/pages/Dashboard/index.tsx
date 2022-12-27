import { FC } from "react";
import { Footer, Main, Header } from "../../components/layout";
import { Outlet } from 'react-router-dom'

import './style.scss'
import { Task } from "../index";


const Dashboard = () => {
    return (
     <>
        <Task /> 
     </>
        )
}
  
export { Dashboard };