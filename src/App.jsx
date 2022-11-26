import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {  Header, Main, Nav, Layout } from "./layout";
import { Dashboard } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";


//import { Header } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/AddCategory" element={<AddCategory />}>
          <Route path="/AddTask" element={<AddTask />} /> */}
          <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
  
  
}

export default App;
