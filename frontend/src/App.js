import logo from './logo.svg';
import './App.css';
import Drawboard from './Components/Drawboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  element={<Login></Login>} path='login' />
        <Route  element={<Signup></Signup>} path='signup'  />
        <Route  element={<Drawboard />} path='drawboard'  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
