
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Banner from './components/Banner';

import Home from './components/Home';

import Navbar from './components/Navbar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
    <Routes>
      
      <Route path='/paidTotal' element={<Home></Home>}></Route>
    </Routes>
    </div>
  );
}

export default App;
