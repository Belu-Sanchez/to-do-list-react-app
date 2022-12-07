import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
//import {  Header, Main, Nav, Layout } from "./layout";
import { Dashboard, Login, Home, Category, Task } from "./pages";


//import { Header } from './components/layout';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/AddCategory" element={<AddCategory />}>
          <Route path="/AddTask" element={<AddTask />} /> */}
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Category" element={<Category />} /> 
        <Route path="/Task" element={<Task />} /> 

        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/Home" element={<Layout />} /> */}

{/* 
        <Route path="users/">
          <Route index element={<Users />} />
          <Route path="add" element={<AddUser />} />
          <Route path="update" element={<UpdateUser />} />
        </Route> */}

      </Routes>
    </BrowserRouter>
  )
  
  
}

export default App;
