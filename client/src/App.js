
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Hotel from "./pages/hotel/Hotel";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import './App.css'
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/find/:id' element={<Hotel/>}/>
        <Route path='/auth/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
