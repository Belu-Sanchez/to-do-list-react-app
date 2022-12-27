import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Categories, Task, AddTasks, AddCategory} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        {/* <Route index element={<Task />} /> */}

        {/* <Route path="tasks" element={<Task />} /> */}
        <Route path="tasks/">
          <Route index element={<Task />} />
          <Route path="save" element={<AddTasks />} />
        </Route>
    

        <Route path="login" element={<Login />} />

        {/* <Route path="profile" element={<Profile />} /> */}

        {/* <Route path="signup" element={<SignUp />} /> */}
{/*  
        <Route path="users/">
          <Route index element={<Users />} /> */}
          {/* <Route path="save" element={<SaveUser />} />
          <Route path="save/:userId" element={<SaveUser />} /> */}
        {/* </Route> */}

        <Route path="categories/">
          <Route index element={<Categories />} />
          <Route path="save" element={<AddCategory />} />
          <Route path="save/:id" element={<AddCategory />} /> 
          
        </Route> 
      </Route>
    </Routes>
  </BrowserRouter>

);
