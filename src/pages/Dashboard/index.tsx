import { FC } from "react";
import { Footer, Main, Header } from "../../components/layout";
import { Outlet } from 'react-router-dom'
import './style.scss'
import { Tasks } from "../index";


const Dashboard = () => {
    return (
     <>
        <Tasks /> 
     </>
        )
}
  
export { Dashboard };