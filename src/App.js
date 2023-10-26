import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Login from "./Login"
import Signup from "./Signup"
import Homepage from './Homepage';

function App() {
  return (
    <Routes>
      <Route  index element={<Homepage />} />
 <Route path='/' index element={<Homepage />} />
 <Route path='/login' element={<Login />} />
 <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
