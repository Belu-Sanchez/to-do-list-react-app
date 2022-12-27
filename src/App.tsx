import { Footer, Main, Header } from "./components/layout";
import { Outlet } from 'react-router-dom'
import { Dashboard } from "./pages";

function App() {
  
  return (
    <>
       <Header />
          <Main >
            <Outlet />
          </Main>
        <Footer />
  </>
      
  )
  
  
}

export default App;
