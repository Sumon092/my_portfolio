import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactMe from './Pages/ContactMe/ContactMe';
import { ToastContainer } from 'react-toastify';
import Notfound from './Pages/Notfound';
import Blogs from './Blogs';
import NavBar from './Pages/NavBar/NavBar';
import MyProjects from './Pages/Projects/MyProjects/MyProjects';
import About from './Pages/Home/About';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/myProjects' element={<MyProjects />}></Route>
        <Route path='/contact' element={<ContactMe />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound />}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
