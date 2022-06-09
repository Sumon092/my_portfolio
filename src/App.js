import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar';
import MyProjects from './Pages/Projects/MyProjects/MyProjects';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/myProjects' element={<MyProjects />}></Route>
        <Route path='/contact' element={<ContactMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
