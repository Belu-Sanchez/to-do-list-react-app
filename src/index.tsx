import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Categories, Task, AddTasks, AddCategory, Users} from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { FormUser } from "./components/forms";



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
        {/* <Route path="users" element={<Users />} /> */}


        {/* <Route path="profile" element={<Profile />} /> */}

        {/* <Route path="signup" element={<SignUp />} /> */}
 
        <Route path="users/">
          <Route index element={<Users />} /> 
           <Route path="save" element={<FormUser />} />
          {/* <Route path="save/:userId" element={<SaveUser />} />  */}
         </Route>

        <Route path="categories/">
          <Route index element={<Categories />} />
          <Route path="save" element={<AddCategory />} />
          <Route path="save/:id" element={<AddCategory />} /> 
          
        </Route> 
      </Route>
    </Routes>
  </BrowserRouter>

);
