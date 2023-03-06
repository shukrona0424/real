import './App.css';
import {Route,Routes,Link} from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Users from "./Pages/Users"
import Details from "./Pages/Details"
import Login from './Pages/Login';
import Join from './Pages/Join';
import Register from './Pages/Register';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/join' element={<Join/>}/>

    </Routes>
    </Layout>
  );
}

export default App;
