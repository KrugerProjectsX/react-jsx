
import './App.css';
import { Routes, Route } from 'react-router-dom';

import  Home  from './Pages/Home';
import  Login  from './Pages/Login';
function App() {
  return (
    <div className="App">
     
     <Routes>
       <Route path={'/'} element={<Login/>}>
        <Route path={'/Dashboard'} element={<Home/>}></Route>
       </Route>
     </Routes>

    </div>
  );
}

export default App;
